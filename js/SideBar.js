        function changeStatus(element){

          if(hasClass(jQuery(element).find("i"), "fa-square-o")){
            jQuery(element).find("i").removeClass("fa-square-o");
            jQuery(element).find("i").addClass("fa-check-square-o");
          }
          else if(hasClass(jQuery(element).find("i"), "fa-check-square-o")){
            jQuery(element).find("i").removeClass("fa-check-square-o");
             jQuery(element).find("i").addClass("fa-square-o");
          }

        }

        function hasClass(element, cls) {
            return (' ' + element.attr('class') + ' ').indexOf(' ' + cls + ' ') > -1;
        }