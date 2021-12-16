var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function( obj, callback ){
        if( !obj || obj.nodeType !== 1 ) return;

        if( MutationObserver ){
            // define a new observer
            var mutationObserver = new MutationObserver(callback)

            // have the observer observe foo for changes in children
            mutationObserver.observe( obj, { childList: true, subtree: true })
            return mutationObserver
        }

        // browser support fallback
        else if( window.addEventListener ){
            obj.addEventListener('DOMNodeInserted', callback, false)
            obj.addEventListener('DOMNodeRemoved', callback, false)
        }
    }
})()



/*window.onerror = function(e,a,b) {
    document.body.insertAdjacentHTML("beforeend", `
        
        <div class="ui message danger" style="max-width: unset; position: absolute; bottom: 0px; margin: 0px; left: 0px;width: available; width: -moz-available">
            <strong>Critical error! </strong>Critical error occured: ${e}
            <button class="close" />
        </div>
        
        `)


}*/

$(document).ready(function() {

    setTimeout(function() {

        observeDOM(document.body, async function (m) {
            var addedNodes = [], removedNodes = [];

            m.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes))

            m.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes))

            setTimeout(() => {
                for (let i = 0; i < addedNodes.length; i++) {

                    let elem = $(addedNodes[i])
                    var classlist = []
                    if (typeof elem.attr('class') != "undefined") {
                        console.log(elem.attr('class'))
                        classlist = elem.attr('class').split(/\s+/);
                    }

                    console.log(classlist)
                    if (classlist.indexOf("toast") > 0) {
                        if (typeof elem.find(".close")[0] != "undefined") {
                            elem.find(".close")[0].onclick = function () {
                                $(this.closest(".toast")).removeClass("slideIn")

                                let koka = this.closest(".toast")

                                $(koka).css("min-height", 0)
                                $(koka).animate({padding: 0, margin: 0, width: 0, height: 0},{duration: 0}, function() {})
                                setTimeout(function() {
                                    koka.remove()
                                },400)

                            }
                        }
                    }
                    if (elem.find(".close")[0] > 0) {
                        if (typeof elem.find(".close")[0] != "undefined") {
                            elem.find(".close")[0].onclick = function () {
                                this.closest(".message").remove()
                            }
                        }
                    }

                }
            }, 50)


        })
        console.log("LOADKADHUJGDSAJGVADHJS")
        let elems = $(".submit")
        for (let i = 0; i < elems.length; i++) {


            elems[i].onclick = function () {
                if (this.parentNode.classList.contains("field")) {
                    console.log($(this.parentNode).parent()[0])
                    $(this.parentNode).parent()[0].submit()
                } else {
                    this.parentNode.submit()
                }

            }
        }
        elems = $(".toast")
        for (let i = 0; i < elems.length; i++) {
            let elem = $(elems[i])
            if (typeof elem.find(".close")[0] != "undefined") {
                elem.find(".close")[0].onclick = function () {
                    $(this.closest(".toast")).removeClass("slideIn")

                    let koka = this.closest(".toast")

                    $(koka).css("min-height", 0)
                    $(koka).animate({padding: 0, margin: 0, width: 0, height: 0},{duration: 0}, function() {})
                    setTimeout(function() {
                        koka.remove()
                    },400)




                }
            }
        }
        elems = $(".ui.message")
        for (let i = 0; i < elems.length; i++) {
            let elem = $(elems[i])
            if (typeof elem.find(".close")[0] != "undefined") {
                elem.find(".close")[0].onclick = function () {
                    this.closest(".message").remove()
                }
            }
        }
        elems = $(".item")
        for (let i = 0; i < elems.length; i++) {


            elems[i].onclick = function () {


            }
        }





    },500);

});

(function( $ ){
    $.fn.toast = function(options) {
let tidi = Math.floor(Math.random()*100000)
        if($(this).has(".toastContainer").length < 1) {
            this.append(`
            <div class="toastContainer" style="position: fixed; left: 0; top: 0; overflow: hidden; width: available; width: -moz-available; z-index: 100; pointer-events:none; ">
            
            </div>
            <style>body {z-index: -10}</style>
            `)
        }
        let genObj = `
        <div class="ui toast slideIn ${options.class ? options.class : ''}" style="clear: both; z-index: 1; position: relative; float: right; pointer-events:all;">
    <div class="title">
        ${options.title ? options.title : "No title"}
        <button class="close" />
    </div>
    <div class="content">
        ${options.message ? options.message : "No message"}
    </div>
    <div id="plusContentId">
        ${options.plusContent ? options.plusContent : ""}
    </div>
    
    
</div>
        
        
        `
        $(this).find(".toastContainer").append(genObj)
        let tis = $(this)
        if(options.displayTime) {
            setTimeout(function() {
                if($(this)) {
                    tis.find()
                }
            },options.displayTime)
        }



        return this;
    };
})( jQuery );

(function( $ ){
    $.fn.setBarValue = function(value) {

        $(this).find(".bar").css("width", value+"%").find("p").text(Math.floor(value)+"%")

        return this;
    };


})( jQuery );