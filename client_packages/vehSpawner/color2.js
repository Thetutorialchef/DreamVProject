/**
 * Colorpicker2 - pure JavaScript color picker2 without using images, external CSS or 1px divs.
 * Copyright � 2011 David Durman, All rights reserved.
 */
(function(window, document, undefined) {

    var type = (window.SVGAngle || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML"),
        picker2, slide, hueOffset = 15, svgNS = 'http://www.w3.org/2000/svg';

    // This HTML snippet is inserted into the innerHTML property of the passed color picker2 element
    // when the no-hassle call to Colorpicker2() is used, i.e. Colorpicker2(function(hex, hsv, rgb) { ... });
    
    var colorpicker2HTMLSnippet = [
        
        '<div class="picker2-wrapper">',
                '<div class="picker2"></div>',
                '<div class="picker2-indicator"></div>',
        '</div>',
        '<div class="slide-wrapper">',
                '<div class="slide"></div>',
                '<div class="slide-indicator"></div>',
        '</div>'
        
    ].join('');

    /**
     * Return mouse position relative to the element el.
     */

    function mousePosition(evt) {
        // IE:
        if (window.event && window.event.contentOverflow !== undefined) {
            return { x: window.event.offsetX, y: window.event.offsetY };
        }
        // Webkit:
        if (evt.offsetX !== undefined && evt.offsetY !== undefined) {
            return { x: evt.offsetX, y: evt.offsetY };
        }
        // Firefox:
        var wrapper = evt.target.parentNode.parentNode;
        return { x: evt.layerX - wrapper.offsetLeft, y: evt.layerY - wrapper.offsetTop };
    }

    /**
     * Create SVG element.
     */
    function $(el, attrs, children) {
        el = document.createElementNS(svgNS, el);
        for (var key in attrs)
            el.setAttribute(key, attrs[key]);
        if (Object.prototype.toString.call(children) != '[object Array]') children = [children];
        var i = 0, len = (children[0] && children.length) || 0;
        for (; i < len; i++)
            el.appendChild(children[i]);
        return el;
    }

    /**
     * Create slide and picker2 markup depending on the supported technology.
     */
    if (type == 'SVG') {

        slide = $('svg', { id: 'svg4', xmlns: 'http://www.w3.org/2000/svg', version: '1.1', width: '100%', height: '100%' },
                  [
                      $('defs', {},
                        $('linearGradient', { id: 'gradient-hsv', x1: '0%', y1: '100%', x2: '0%', y2: '0%'},
                          [
                              $('stop', { offset: '0%', 'stop-color': '#FF0000', 'stop-opacity': '1' }),
                              $('stop', { offset: '13%', 'stop-color': '#FF00FF', 'stop-opacity': '1' }),
                              $('stop', { offset: '25%', 'stop-color': '#8000FF', 'stop-opacity': '1' }),
                              $('stop', { offset: '38%', 'stop-color': '#0040FF', 'stop-opacity': '1' }),
                              $('stop', { offset: '50%', 'stop-color': '#00FFFF', 'stop-opacity': '1' }),
                              $('stop', { offset: '63%', 'stop-color': '#00FF40', 'stop-opacity': '1' }),
                              $('stop', { offset: '75%', 'stop-color': '#0BED00', 'stop-opacity': '1' }),
                              $('stop', { offset: '88%', 'stop-color': '#FFFF00', 'stop-opacity': '1' }),
                              $('stop', { offset: '100%', 'stop-color': '#FF0000', 'stop-opacity': '1' })
                          ]
                         )
                       ),
                      $('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#gradient-hsv)'})
                  ]
                 );

        picker2 = $('svg', { id: 'svg3', xmlns: 'http://www.w3.org/2000/svg', version: '1.1', width: '100%', height: '100%' },
                   [
                       $('defs', {},
                         [
                             $('linearGradient', { id: 'gradient-black', x1: '0%', y1: '100%', x2: '0%', y2: '0%'},
                               [
                                   $('stop', { offset: '0%', 'stop-color': '#000000', 'stop-opacity': '1' }),
                                   $('stop', { offset: '100%', 'stop-color': '#CC9A81', 'stop-opacity': '0' })
                               ]
                              ),
                             $('linearGradient', { id: 'gradient-white', x1: '0%', y1: '100%', x2: '100%', y2: '100%'},
                               [
                                   $('stop', { offset: '0%', 'stop-color': '#FFFFFF', 'stop-opacity': '1' }),
                                   $('stop', { offset: '100%', 'stop-color': '#CC9A81', 'stop-opacity': '0' })
                               ]
                              )
                         ]
                        ),
                       $('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#gradient-white)'}),
                       $('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#gradient-black)'})
                   ]
                  );

    } else if (type == 'VML') {
        slide = [
            '<DIV style="position: relative; width: 100%; height: 100%">',
            '<v:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t">',
            '<v:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></v:fill>',
            '</v:rect>',
            '</DIV>'
        ].join('');

        picker2 = [
            '<DIV style="position: relative; width: 100%; height: 100%">',
            '<v:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t">',
            '<v:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',
            '</v:rect>',
            '<v:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t">',
            '<v:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',
            '</v:rect>',
            '</DIV>'
        ].join('');
        
        if (!document.namespaces['v'])
            document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
    }

    /**
     * Convert HSV representation to RGB HEX string.
     * Credits to http://www.raphaeljs.com
     */
    function hsv2rgb(hsv) {
        var R, G, B, X, C;
        var h = (hsv.h % 360) / 60;
        
        C = hsv.v * hsv.s;
        X = C * (1 - Math.abs(h % 2 - 1));
        R = G = B = hsv.v - C;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];

        var r = Math.floor(R * 255);
        var g = Math.floor(G * 255);
        var b = Math.floor(B * 255);
        return { r: r, g: g, b: b, hex: "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1) };
    }

    /**
     * Convert RGB representation to HSV.
     * r, g, b can be either in <0,1> range or <0,255> range.
     * Credits to http://www.raphaeljs.com
     */
    function rgb2hsv(rgb) {

        var r = rgb.r;
        var g = rgb.g;
        var b = rgb.b;
        
        if (rgb.r > 1 || rgb.g > 1 || rgb.b > 1) {
            r /= 255;
            g /= 255;
            b /= 255;
        }

        var H, S, V, C;
        V = Math.max(r, g, b);
        C = V - Math.min(r, g, b);
        H = (C == 0 ? null :
             V == r ? (g - b) / C + (g < b ? 6 : 0) :
             V == g ? (b - r) / C + 2 :
                      (r - g) / C + 4);
        H = (H % 6) * 60;
        S = C == 0 ? 0 : C / V;
        return { h: H, s: S, v: V };
    }

    /**
     * Return click event handler for the slider2.
     * Sets picker2 background color and calls ctx.callback if provided.
     */  
    function slideListener(ctx, slideElement, picker2Element) {
        return function(evt) {
            evt = evt || window.event;
            var mouse = mousePosition(evt);
            ctx.h = mouse.y / slideElement.offsetHeight * 360 + hueOffset;
            var picker2Color = hsv2rgb({ h: ctx.h, s: 1, v: 1 });
            var c = hsv2rgb({ h: ctx.h, s: ctx.s, v: ctx.v });
            picker2Element.style.backgroundColor = picker2Color.hex;
            ctx.callback && ctx.callback(c.hex, { h: ctx.h - hueOffset, s: ctx.s, v: ctx.v }, { r: c.r, g: c.g, b: c.b }, undefined, mouse);
        }
    };

    /**
     * Return click event handler for the picker2.
     * Calls ctx.callback if provided.
     */  
    function picker2Listener(ctx, picker2Element) {
        return function(evt) {
            evt = evt || window.event;
            var mouse = mousePosition(evt),
                width = picker2Element.offsetWidth,            
                height = picker2Element.offsetHeight;

            ctx.s = mouse.x / width;
            ctx.v = (height - mouse.y) / height;
            var c = hsv2rgb(ctx);
            ctx.callback && ctx.callback(c.hex, { h: ctx.h - hueOffset, s: ctx.s, v: ctx.v }, { r: c.r, g: c.g, b: c.b }, mouse);
        }
    };

    var uniqID = 0;
    
    /**
     * Colorpicker2.
     * @param {DOMElement} slideElement HSV slide element.
     * @param {DOMElement} picker2Element HSV picker2 element.
     * @param {Function} callback Called whenever the color is changed provided chosen color in RGB HEX format as the only argument.
     */
    function Colorpicker2(slideElement, picker2Element, callback) {
        
        if (!(this instanceof Colorpicker2)) return new Colorpicker2(slideElement, picker2Element, callback);

        this.h = 0;
        this.s = 1;
        this.v = 1;

        if (!callback) {
            // call of the form Colorpicker2(element, funtion(hex, hsv, rgb) { ... }), i.e. the no-hassle call.

            var element = slideElement;
            element.innerHTML = colorpicker2HTMLSnippet;
            
            this.slideElement = element.getElementsByClassName('slide')[0];
            this.picker2Element = element.getElementsByClassName('picker2')[0];
            var slideIndicator = element.getElementsByClassName('slide-indicator')[0];
            var picker2Indicator = element.getElementsByClassName('picker2-indicator')[0];
            
            Colorpicker2.fixIndicators(slideIndicator, picker2Indicator);

            this.callback = function(hex, hsv, rgb, picker2Coordinate, slideCoordinate) {

                Colorpicker2.positionIndicators(slideIndicator, picker2Indicator, slideCoordinate, picker2Coordinate);
                
                picker2Element(hex, hsv, rgb);
            };
            
        } else {
        
            this.callback = callback;
            this.picker2Element = picker2Element;
            this.slideElement = slideElement;
        }

        if (type == 'SVG') {

            // Generate uniq IDs for linearGradients so that we don't have the same IDs within one document.
            // Then reference those gradients in the associated rectangles.

            var slideClone = slide.cloneNode(true);
            var picker2Clone = picker2.cloneNode(true);
            
            var hsvGradient = slideClone.getElementById('gradient-hsv');
            
            var hsvRect = slideClone.getElementsByTagName('rect')[0];
            
            hsvGradient.id = 'gradient-hsv-' + uniqID;
            hsvRect.setAttribute('fill', 'url(#' + hsvGradient.id + ')');

            var blackAndWhiteGradients = [picker2Clone.getElementById('gradient-black'), picker2Clone.getElementById('gradient-white')];
            var whiteAndBlackRects = picker2Clone.getElementsByTagName('rect');
            
            blackAndWhiteGradients[0].id = 'gradient-black-' + uniqID;
            blackAndWhiteGradients[1].id = 'gradient-white-' + uniqID;
            
            whiteAndBlackRects[0].setAttribute('fill', 'url(#' + blackAndWhiteGradients[1].id + ')');
            whiteAndBlackRects[1].setAttribute('fill', 'url(#' + blackAndWhiteGradients[0].id + ')');

            this.slideElement.appendChild(slideClone);
            this.picker2Element.appendChild(picker2Clone);

            uniqID++;
            
        } else {
            
            this.slideElement.innerHTML = slide;
            this.picker2Element.innerHTML = picker2;            
        }

        addEventListener(this.slideElement, 'click', slideListener(this, this.slideElement, this.picker2Element));
        addEventListener(this.picker2Element, 'click', picker2Listener(this, this.picker2Element));

        enableDragging(this, this.slideElement, slideListener(this, this.slideElement, this.picker2Element));
        enableDragging(this, this.picker2Element, picker2Listener(this, this.picker2Element));
    };

    function addEventListener(element, event, listener) {

        if (element.attachEvent) {
            
            element.attachEvent('on' + event, listener);
            
        } else if (element.addEventListener) {

            element.addEventListener(event, listener, false);
        }
    }

   /**
    * Enable drag&drop color selection.
    * @param {object} ctx Colorpicker2 instance.
    * @param {DOMElement} element HSV slide element or HSV picker2 element.
    * @param {Function} listener Function that will be called whenever mouse is dragged over the element with event object as argument.
    */
    function enableDragging(ctx, element, listener) {
        
        var mousedown = false;

        addEventListener(element, 'mousedown', function(evt) { mousedown = true;  });
        addEventListener(element, 'mouseup',   function(evt) { mousedown = false;  });
        addEventListener(element, 'mouseout',  function(evt) { mousedown = false;  });
        addEventListener(element, 'mousemove', function(evt) {

            if (mousedown) {
                
                listener(evt);
            }
        });
    }


    Colorpicker2.hsv2rgb = function(hsv) {
        var rgbHex = hsv2rgb(hsv);
        delete rgbHex.hex;
        return rgbHex;
    };
    
    Colorpicker2.hsv2hex = function(hsv) {
        return hsv2rgb(hsv).hex;
    };
    
    Colorpicker2.rgb2hsv = rgb2hsv;

    Colorpicker2.rgb2hex = function(rgb) {
        return hsv2rgb(rgb2hsv(rgb)).hex;
    };
    
    Colorpicker2.hex2hsv = function(hex) {
        return rgb2hsv(Colorpicker2.hex2rgb(hex));
    };
    
    Colorpicker2.hex2rgb = function(hex) {
        return { r: parseInt(hex.substr(1, 2), 16), g: parseInt(hex.substr(3, 2), 16), b: parseInt(hex.substr(5, 2), 16) };
    };

    /**
     * Sets color of the picker2 in hsv/rgb/hex format.
     * @param {object} ctx Colorpicker2 instance.
     * @param {object} hsv Object of the form: { h: <hue>, s: <saturation>, v: <value> }.
     * @param {object} rgb Object of the form: { r: <red>, g: <green>, b: <blue> }.
     * @param {string} hex String of the form: #RRGGBB.
     */
     function setColor(ctx, hsv, rgb, hex) {
         ctx.h = hsv.h % 360;
         ctx.s = hsv.s;
         ctx.v = hsv.v;
         
         var c = hsv2rgb(ctx);
         
         var mouseSlide = {
             y: (ctx.h * ctx.slideElement.offsetHeight) / 360,
             x: 0    // not important
         };
         
         var picker2Height = ctx.picker2Element.offsetHeight;
         
         var mousepicker2 = {
             x: ctx.s * ctx.picker2Element.offsetWidth,
             y: picker2Height - ctx.v * picker2Height
         };
         
         ctx.picker2Element.style.backgroundColor = hsv2rgb({ h: ctx.h, s: 1, v: 1 }).hex;
         ctx.callback && ctx.callback(hex || c.hex, { h: ctx.h, s: ctx.s, v: ctx.v }, rgb || { r: c.r, g: c.g, b: c.b }, mousepicker2, mouseSlide);
         
         return ctx;
    };

    /**
     * Sets color of the picker2 in rgb format.
     * @param {object} rgb Object of the form: { r: <red>, g: <green>, b: <blue> }.
     */
    Colorpicker2.prototype.setHsv = function(hsv) {
        return setColor(this, hsv);
    };
    
    /**
     * Sets color of the picker2 in rgb format.
     * @param {object} rgb Object of the form: { r: <red>, g: <green>, b: <blue> }.
     */
    Colorpicker2.prototype.setRgb = function(rgb) {
        return setColor(this, rgb2hsv(rgb), rgb);
    };

    /**
     * Sets color of the picker2 in hex format.
     * @param {string} hex Hex color format #RRGGBB.
     */
    Colorpicker2.prototype.setHex = function(hex) {
        return setColor(this, Colorpicker2.hex2hsv(hex), undefined, hex);
    };

    /**
     * Helper to position indicators.
     * @param {HTMLElement} slideIndicator DOM element representing the indicator of the slide area.
     * @param {HTMLElement} picker2Indicator DOM element representing the indicator of the picker2 area.
     * @param {object} mouseSlide Coordinates of the mouse cursor in the slide area.
     * @param {object} mousepicker2 Coordinates of the mouse cursor in the picker2 area.
     */
    Colorpicker2.positionIndicators = function(slideIndicator, picker2Indicator, mouseSlide, mousepicker2) {
        
        if (mouseSlide) {
            slideIndicator.style.top = (mouseSlide.y - slideIndicator.offsetHeight/2) + 'px';
        }
        if (mousepicker2) {
            picker2Indicator.style.top = (mousepicker2.y - picker2Indicator.offsetHeight/2) + 'px';
            picker2Indicator.style.left = (mousepicker2.x - picker2Indicator.offsetWidth/2) + 'px';
        } 
    };

    /**
     * Helper to fix indicators - this is recommended (and needed) for dragable color selection (see enabledDragging()).
     */
    Colorpicker2.fixIndicators = function(slideIndicator, picker2Indicator) {

        picker2Indicator.style.pointerEvents = 'none';
        slideIndicator.style.pointerEvents = 'none';
    };

    window.Colorpicker2 = Colorpicker2;

})(window, window.document);
Colorpicker2(

        document.getElementById('slider2'),
        document.getElementById('picker2'),

        function(hex, hsv, rgb) {
          console.log(hsv.h, hsv.s, hsv.v);         // [0-359], [0-1], [0-1]
          console.log(rgb.r, rgb.g, rgb.b);         // [0-255], [0-255], [0-255]
          document.getElementById('col2').style.color = hex;
        });