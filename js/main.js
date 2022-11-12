(function ($) {
  "use strict";


})(jQuery);




$(document).ready(function(){

// slider
$(document).ready(function(){
  function birdJqueryUiOneHand(sWrap,sSlide,sTarget,fixedDecimal){
    let uiSliderElm = document.querySelectorAll(sSlide);
    function sliderFunction(){
      uiSliderElm.forEach(CurrentElement => {
        let uiSliderElmSingle = CurrentElement;
        let uiSliderElmParent = getClosest(uiSliderElmSingle,sWrap);
        let uiSliderTarget = uiSliderElmParent.querySelector(sTarget);
        let uiSliderElmValue = uiSliderElmSingle.getAttribute('val') * 1;
        let uiSliderElmMin = uiSliderElmSingle.getAttribute('min') * 1;
        let uiSliderElmMax = uiSliderElmSingle.getAttribute('max') * 1;
        let uiSliderElmStep = uiSliderElmSingle.getAttribute('step') * 1;
        let uiSliderElmTarFixDecimal = uiSliderTarget.getAttribute('fixed-decimal') ? (uiSliderTarget.getAttribute('fixed-decimal') * 1) : 0;
        let uiSliderTarPrefix = (uiSliderTarget.getAttribute('prefix')) ? uiSliderTarget.getAttribute('prefix') : '';
        let uiSliderTarSuffix = (uiSliderTarget.getAttribute('suffix')) ? uiSliderTarget.getAttribute('suffix') : '';
        $( function() {
          $( uiSliderElmSingle ).slider({
            min: uiSliderElmMin,
            max: uiSliderElmMax,
            value: uiSliderElmValue,
            step: uiSliderElmStep,
            orientation: "horizontal",
            range: "min",
            animate: true,
            slide: function( event, ui ) {
              $( uiSliderTarget ).text(uiSliderTarPrefix + ui.value.toFixed(uiSliderElmTarFixDecimal) + uiSliderTarSuffix);
            },
          });
          $( uiSliderTarget ).text(uiSliderTarPrefix + ($( uiSliderElmSingle ).slider( "value" )).toFixed(uiSliderElmTarFixDecimal) + uiSliderTarSuffix);
        });
      })
    }
    if (uiSliderElm.length) {
      sliderFunction();
    }
    // function to get closest
    function getClosest( elem, selector ) {
      while (elem !== document.body) {
          elem = elem.parentElement;
          if (elem.matches(selector)) return elem;
      }
    }
  }
  birdJqueryUiOneHand('.uiOneHand-single','.uiSlider-element','.uiSlider-target',2);
});
  
})











