	
			function checkResolution() {
				// Resolution width > 1280px
				
				 if ($(window).innerWidth() >= 992 ) {
					replaceImagePaths("desktop");
				}
				// Resolution width 425px - 768px 
				else if ($(window).innerWidth() > 426 && $(window).innerWidth() <= 991) {
					replaceImagePaths("TAB");
				}

				// Resolution width 321px - 425px 
				else if ($(window).innerWidth() >= 321 && $(window).innerWidth() <= 425) {
					replaceImagePaths("mobileL");
				}

				// Resolution width 320px - 768px 
				else if ($(window).innerWidth() <= 320) {
					replaceImagePaths("mobileS");
				}
			}
			
			
			function replaceImagePaths(resolution) {
				// Switch images
				$('img.responsive').each(function(){
					var imagePath = $(this).attr('src');
			
					$(this).attr('src', imagePath.replace(/desktop/, resolution));//with the right regex you can do it all in one
			
				});//was missing the  ");"
			}

			$(window).resize(function() {
				checkResolution();
			});
			
			$(function(){
				checkResolution();
			});
			