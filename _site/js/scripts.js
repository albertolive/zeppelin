(function(e) {
    e(document).ready(function() {
        function t(e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r), n = e[--r], e[r] = e[t], e[t] = n) {}
            return e
        }

        function r() {
            if (e(window).width() > 767) {
                e(".same-height-wrapper").each(function() {
                    var t = 0;
                    e(".same-height").each(function() {
                        var n = e(this).height();
                        if (n > t) {
                            t = n
                        }
                    });
                    e(".same-height").each(function() {
                        e(this).height(t)
                    })
                })
            }
        }
        debugger;
        if ( window.self === window.top ) { 
        // console.log("not in a frame") 
            debugger;
           window.location.href = 'http://www.casacorbella.cat';
        }

        e("#top-header").addClass("after-scroll");
        e("body").css("overflow", "hidden");
        e(window).load(function() {
            function i() {
                var r = e("#loading-animation"),
                    i = e("#preloader");
                r.fadeOut();
                i.delay(t).fadeOut(n)
            }
            var t = 350,
                n = 800;
            e("body").css("overflow", "auto");
            i();
            r()
        });
        if (e(window).width() > 1500) {
            e(".team-item-wrapper").each(function() {
                e(this).addClass("col-lg-3")
            })
        }
        if (e(window).width() < 768) {
            e(".animated").removeClass("animated").removeClass("hiding");
            e(".stat span").removeClass("timer")
        }
        if (e(window).height() < 512) {
            e("#bottom-navlinks").removeClass("bottom-navlinks").addClass("bottom-navlinks-small")
        }
        if (e(window).scrollTop() >= 100) {}
        e(window).scroll(function() {
            var t = e(this).scrollTop();
            var n = e("#top-header");
            var r = e("#logo-header");
            var i = r.attr("src");
            var s = e("#buy-tickets-button");
            if (t >= 100) {} else {} if (t >= e(window).height()) {
                s.fadeIn(400);
                s.removeClass("hidden")
            } else {
                s.fadeOut(400, function() {
                    s.addClass("hidden")
                })
            }
        });
        e(function() {
            var n = [];
            e(".rockstar-speakers-item").each(function() {
                n[n.length] = e(this).attr("data-id")
            });
            n = t(n);
            for (var r = 0; r < 4; r++) {
                e("#rockstar-speaker-" + n[r]).removeClass("hidden")
            }
        });
        var n = parseInt(e(".increment-animation").attr("data-delay"));
        e(".increment-animation").not("hidden").each(function(t) {
            e(this).attr("data-delay", t * n)
        });
        e(".animated").appear(function() {
            var t = e(this);
            var n = t.data("animation");
            var r = t.data("delay");
            if (r) {
                setTimeout(function() {
                    t.addClass(n + " visible");
                    t.removeClass("hiding");
                    if (t.hasClass("counter")) {
                        t.find(".timer").countTo()
                    }
                }, r)
            } else {
                t.addClass(n + " visible");
                t.removeClass("hiding");
                if (t.hasClass("counter")) {
                    t.find(".timer").countTo()
                }
            }
        }, {
            accY: -150
        });
        $(function() {
            var appear, delay, i, offset, _i, _len, _ref;
            _ref = $(".appear-animation");
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                offset = i.offsetLeft + i.offsetTop;
                delay = offset / 1000;
                $(i).css('transition-delay', '' + (delay * 0.47) + 's');
                $(i).css('transition-duration', '' + 0.2 + 's');
            }
        });
        $('.appear-animation-trigger').appear(function() {
            setTimeout(function() {
                $('.appear-animation-trigger').parent('div').find('.appear-animation').addClass('visible');
            }, 1000);
        });
        $('.animated').appear(function() {
            var element = $(this);
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if (animationDelay) {
                setTimeout(function() {
                    element.addClass(animation + " visible");
                    element.removeClass('hiding');
                    if (element.hasClass('counter')) {
                        element.find('.timer').countTo();
                    }
                }, animationDelay);
            } else {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
                if (element.hasClass('counter')) {
                    element.find('.timer').countTo();
                }
            }
        }, {
            accY: -150
        });
        e(function() {
            e("a[href*=#]:not([href=#])").click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var t = e(this.hash);
                    t = t.length ? t : e("[name=" + this.hash.slice(1) + "]");
                    if (t.length) {
                        e("html,body").animate({
                            scrollTop: t.offset().top
                        }, 1e3);
                        return false
                    }
                }
            })
        });
        e(function() {
            e("a[href=#]").click(function() {
                event.preventDefault()
            })
        });
        e("#post-section .post-body p").each(function() {
            if (e(this).find(".feature-image").length) {
                var t = e(this).find(".feature-image").prop("src");
                e("#top-section").css("background-image", "url(" + t + ")").addClass("enable-overlay")
            }
        });
        e(".slider").each(function() {
            e(this).find(".slider-item").first().addClass("slider-current-item").removeClass("hidden");
            if (e(this).find(".slider-item").length > 1) {
                e(this).closest(".speaker-item").find(".slider-next-item").removeClass("hidden")
            }
        });
        e(".slider-next-item").click(function() {
            var t = e(this).closest(".speaker-item");
            var n = t.find(".slider-current-item").next();
            if (n.length) {
                n.addClass("slider-current-item").removeClass("hidden");
                t.find(".slider-current-item").first().removeClass("slider-current-item").addClass("hidden")
            } else {
                t.find(".slider-item").first().addClass("slider-current-item").removeClass("hidden");
                t.find(".slider-current-item").last().removeClass("slider-current-item").addClass("hidden")
            }
        });
        var i = e(".st-container");
        e("#menu-trigger").click(function(t) {
            t.stopPropagation();
            var n = e(window).scrollTop();
            var r = e(window).scrollLeft();
            var s = e(this).attr("data-effect");
            if (!i.hasClass("st-menu-open")) {
                i.addClass(s).delay(25).addClass("st-menu-open");
                e("body").css("overflow", "hidden")
            } else {
                i.removeClass("st-menu-open");
                e("body").css("overflow", "auto")
            }
        });
        e(".st-pusher").click(function() {
            if (i.hasClass("st-menu-open")) {
                i.removeClass("st-menu-open");
                e("body").css("overflow", "auto")
            }
        });
        e(window).resize(function() {
            if (e(window).width() > 1500) {
                e(".team-item-wrapper").each(function() {
                    e(this).addClass("col-lg-3")
                })
            } else {
                e(".team-item-wrapper").each(function() {
                    e(this).removeClass("col-lg-3")
                })
            } if (e(window).width() > 767) {
                if (i.hasClass("st-menu-open")) {
                    i.removeClass("st-menu-open");
                    e("body").css("overflow", "auto")
                }
                r()
            }
            var t = e("#bottom-navlinks");
            if (e(window).height() < 512) {
                t.removeClass("bottom-navlinks").addClass("bottom-navlinks-small")
            } else {
                t.removeClass("bottom-navlinks-small").addClass("bottom-navlinks")
            } if (e(window).width() < 768) {
                e(".same-height").css("height", "100%")
            }
        });
        e(".modal").on("show.bs.modal", function() {
            e("body").css("overflow", "hidden")
        });
        e(".modal").on("hide.bs.modal", function() {
            e("body").css("overflow", "auto")
        });
        var use = false;
        if (typeof twitterFeedUrl !== "undefined" && use === true ) {
            var s = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from json where url="' + twitterFeedUrl + '"') + "&format=json&callback=?";
            e.getJSON(s, function(t) {
                e.each(t.query.results.json.json, function(t, n) {
                    var r = '<div class="tweet animated fadeInUp hidden"><p class="tweet-text">' + o(n.text) + '</p><p class="tweet-meta">by <a href="https://twitter.com/' + n.user.screen_name + ' target="_blank">@' + n.user.screen_name + "</a></p></div>";
                    e("#tweets").append(r)
                });
                u()
            });

            function o(e) {
                var t, n, r, i, s;
                n = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                t = e.replace(n, '<a href="$1" target="_blank">$1</a>');
                r = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                t = t.replace(r, '$1<a href="http://$2" target="_blank">$2</a>');
                i = /#(\S*)/g;
                t = t.replace(i, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
                s = /\B@([\w-]+)/gm;
                t = t.replace(s, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
                return t
            }

            function u() {
                function r() {
                    var r = ++n % t.length;
                    e(t.get(r - 1)).addClass("hidden");
                    e(t.get(r)).removeClass("hidden")
                }
                var t = e("#tweets").find(".tweet"),
                    n = 0;
                e(t.get(0)).removeClass("hidden");
                var i = setInterval(r, 5e3)
            }
        }
    });
    (function() {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "https://apis.google.com/js/platform.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    })();
    if (typeof googleMaps !== "undefined") {
        var t, n, r, i, s, o;
        var u = [];
        var a = new google.maps.DirectionsService;
        var f = "custom_style";

        function l() {
            function T(n, i) {
                var o = {
                    origin: n,
                    destination: eventPlace,
                    travelMode: google.maps.TravelMode[i]
                };
                a.route(o, function(o, u) {
                    if (u == google.maps.DirectionsStatus.OK) {
                        t.setMapTypeId("zoomed");
                        r.setMap(t);
                        r.setDirections(o);
                        var a = o.routes[0].legs[0];
                        N(a.start_location);
                        N(a.end_location);
                        e("#distance").text(a.distance.text);
                        e("#estimateTime").text(a.duration.text);
                        e("#mode-select").val(i);
                        e("#mode").removeClass("hidden");
                        var f = e("#mode-icon use").attr("xlink:href");
                        f = f.substring(0, f.indexOf("#") + 1) + "icon-" + i.toLowerCase();
                        e("#mode-icon use").attr("xlink:href", f)
                    } else {
                        if (u != google.maps.DirectionsStatus.OK && i != "DRIVING") {
                            T(n, "DRIVING")
                        } else {
                            var l = s.getPath();
                            l.push(n);
                            l.push(eventPlace);
                            N(n);
                            N(eventPlace);
                            var c = new google.maps.LatLngBounds;
                            c.extend(n);
                            c.extend(eventPlace);
                            t.fitBounds(c);
                            s.setMap(t);
                            var h = Math.round(google.maps.geometry.spherical.computeDistanceBetween(n, eventPlace) / 1e3);
                            e("#distance").text(h + " km");
                            e("#estimateTime").text("");
                            e("#find-flight").removeClass("hidden");
                            e("#mode").addClass("hidden")
                        }
                    }
                });
                L();
                e("#find-way").addClass("location-active");
                O(n);
                e("#find-way h3").removeClass("fadeInUp").addClass("fadeOutDown")
            }

            function N(e) {
                var n = new google.maps.Marker({
                    position: e,
                    map: t,
                    icon: icon
                });
                u.push(n)
            }

            function C(e) {
                var n = new google.maps.Marker({
                    position: e,
                    map: t
                });
                u.push(n)
            }

            function L() {
                for (var e = 0; e < u.length; e++) {
                    u[e].setMap(null)
                }
                u = []
            }

            function A(e) {
                var n = t.getZoom(),
                    r = 50;
                var i = Math.abs(e - n);
                var s = e > n ? 1 : -1;
                for (var o = 0; o < i; o++) {
                    setTimeout(function() {
                        n += s;
                        t.setZoom(n)
                    }, (o + 1) * r)
                }
            }

            function O(t) {
                i.geocode({
                    latLng: t
                }, function(t, n) {
                    if (n == google.maps.GeocoderStatus.OK && t[1]) {
                        var r = t[1].address_components;
                        e.each(r, function(t, n) {
                            if (n.types[0] == "locality") {
                                e("#result-name").text(n.long_name);
                                return false
                            }
                        })
                    }
                })
            }
            r = new google.maps.DirectionsRenderer({
                suppressMarkers: true
            });
            i = new google.maps.Geocoder;
            s = new google.maps.Polyline({
                strokeColor: "#03a9f4",
                strokeOpacity: 1,
                strokeWeight: 2
            });
            var l = [{
                stylers: [{
                    lightness: 40
                }, {
                    visibility: "on"
                }, {
                    gamma: .9
                }, {
                    weight: .4
                }]
            }, {
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                stylers: [{
                    color: "#5dc7ff"
                }]
            }, {
                featureType: "road",
                stylers: [{
                    visibility: "off"
                }]
            }];
            var p = [{
                stylers: [{
                    lightness: 40
                }, {
                    visibility: "on"
                }, {
                    gamma: 1.1
                }, {
                    weight: .9
                }]
            }, {
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                stylers: [{
                    color: "#5dc7ff"
                }]
            }, {
                featureType: "road",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [{
                    saturation: -30
                }]
            }];
            var v = {
                zoom: 17,
                minZoom: 2,
                scrollwheel: false,
                panControl: false,
                draggable: false,
                zoomControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP
                },
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                center: centerMap,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, f]
                },
                mapTypeId: f
            };
            if (e(window).width() < 768) {
                v.center = mobileCenterMap
            }
            if (googleMaps == "logistics") {
                v.zoom = 5;
                v.zoomControl = true
            }
            t = new google.maps.Map(document.getElementById("canvas-map"), v);
            var m = new google.maps.Marker({
                position: eventPlace,
                animation: google.maps.Animation.DROP,
                icon: icon,
                map: t
            });
            u.push(m);
            var y = {
                name: "Default Style"
            };
            var w = {
                name: "Zoomed Style"
            };
            var E = new google.maps.StyledMapType(l, y);
            var S = new google.maps.StyledMapType(p, w);
            t.mapTypes.set("default", E);
            t.mapTypes.set("zoomed", S);
            if (googleMaps === "logistics") {
                t.setMapTypeId("default");
                var x = document.getElementById("location-input");
                n = new google.maps.places.Autocomplete(x);
                google.maps.event.addListener(n, "place_changed", function() {
                    m.setVisible(false);
                    var e = n.getPlace();
                    if (e.geometry == "undefined" || !e.geometry) {
                        return
                    }
                    var t = "";
                    if (e.address_components) {
                        t = [e.address_components[0] && e.address_components[0].short_name || "", e.address_components[1] && e.address_components[1].short_name || "", e.address_components[2] && e.address_components[2].short_name || ""].join(" ")
                    }
                    i.geocode({
                        address: t
                    }, function(e, t) {
                        if (t == google.maps.GeocoderStatus.OK) {
                            o = e[0].geometry.location;
                            T(o, "TRANSIT")
                        } else {
                            alert("Geocode was not successful for the following reason: " + t)
                        }
                    })
                })
            } else {
                t.setMapTypeId("zoomed")
            }
            e("#mode-select").change(function() {
                var t = e(this).val();
                T(o, t)
            });
            e("#direction-locate").click(function() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(e) {
                        o = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
                        T(o, "TRANSIT")
                    })
                }
            });
            e("#direction-cancel").click(function() {
                e("#find-way").removeClass("location-active");
                e("#location-input").val("");
                e("#find-flight").addClass("hidden");
                L();
                r.setMap(null);
                s.setMap(null);
                t.setMapTypeId("default");
                t.panTo(eventPlace);
                if (e(window).width() < 768) {
                    t.setCenter(mobileCenterMap)
                } else {
                    t.setCenter(centerMap)
                }
                N(eventPlace);
                A(5);
                e("#find-way h3").removeClass("fadeOutDown").addClass("fadeInUp")
            })
        }
        google.maps.event.addDomListener(window, "load", l)
    }
})(jQuery)