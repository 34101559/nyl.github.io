particlesJS("particles-js",{"particles":{"number":{"value":40,"density":{"enable":true,"value_area":900}},"limit":10,"color":{"value":"#ddd"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ddd"},"polygon":{"nb_sides":5}},"opacity":{"value":0.8,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":true}},"size":{"value":3,"random":true,"anim":{"enable":true,"speed":10,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":80,"color":"#ddd","opacity":0.3,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":140,"line_linked":{"opacity":1}},"bubble":{"distance":100,"size":4,"duration":40,"opacity":2,"speed":2},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});jQuery(document).ready(function($){var animationDelay=2500,barAnimationDelay=3800,barWaiting=barAnimationDelay-3000,lettersDelay=50,typeLettersDelay=150,selectionDuration=500,typeAnimationDelay=selectionDuration+800,revealDuration=600,revealAnimationDelay=1500;initHeadline();function initHeadline(){singleLetters($('.cd-headline.letters').find('b'));animateHeadline($('.cd-headline'));}function singleLetters($words){$words.each(function(){var word=$(this),letters=word.text().split(''),selected=word.hasClass('is-visible');for(i in letters){if(word.parents('.rotate-2').length>0)letters[i]='<em>'+letters[i]+'</em>';letters[i]=(selected)?'<i class="in">'+letters[i]+'</i>':'<i>'+letters[i]+'</i>';}var newLetters=letters.join('');word.html(newLetters).css('opacity',1);});}function animateHeadline($headlines){var duration=animationDelay;$headlines.each(function(){var headline=$(this);if(headline.hasClass('loading-bar')){duration=barAnimationDelay;setTimeout(function(){headline.find('.cd-words-wrapper').addClass('is-loading')},barWaiting);}else if(headline.hasClass('clip')){var spanWrapper=headline.find('.cd-words-wrapper'),newWidth=spanWrapper.width()+10
spanWrapper.css('width',newWidth);}else if(!headline.hasClass('type')){var words=headline.find('.cd-words-wrapper b'),width=0;words.each(function(){var wordWidth=$(this).width();if(wordWidth>width)width=wordWidth;});headline.find('.cd-words-wrapper').css('width',width);};setTimeout(function(){hideWord(headline.find('.is-visible').eq(0))},duration);});}function hideWord($word){var nextWord=takeNext($word);if($word.parents('.cd-headline').hasClass('type')){var parentSpan=$word.parent('.cd-words-wrapper');parentSpan.addClass('selected').removeClass('waiting');setTimeout(function(){parentSpan.removeClass('selected');$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');},selectionDuration);setTimeout(function(){showWord(nextWord,typeLettersDelay)},typeAnimationDelay);}else if($word.parents('.cd-headline').hasClass('letters')){var bool=($word.children('i').length>=nextWord.children('i').length)?true:false;hideLetter($word.find('i').eq(0),$word,bool,lettersDelay);showLetter(nextWord.find('i').eq(0),nextWord,bool,lettersDelay);}else if($word.parents('.cd-headline').hasClass('clip')){$word.parents('.cd-words-wrapper').animate({width:'2px'},revealDuration,function(){switchWord($word,nextWord);showWord(nextWord);});}else if($word.parents('.cd-headline').hasClass('loading-bar')){$word.parents('.cd-words-wrapper').removeClass('is-loading');switchWord($word,nextWord);setTimeout(function(){hideWord(nextWord)},barAnimationDelay);setTimeout(function(){$word.parents('.cd-words-wrapper').addClass('is-loading')},barWaiting);}else{switchWord($word,nextWord);setTimeout(function(){hideWord(nextWord)},animationDelay);}}function showWord($word,$duration){if($word.parents('.cd-headline').hasClass('type')){showLetter($word.find('i').eq(0),$word,false,$duration);$word.addClass('is-visible').removeClass('is-hidden');}else if($word.parents('.cd-headline').hasClass('clip')){$word.parents('.cd-words-wrapper').animate({'width':$word.width()+10},revealDuration,function(){setTimeout(function(){hideWord($word)},revealAnimationDelay);});}}function hideLetter($letter,$word,$bool,$duration){$letter.removeClass('in').addClass('out');if(!$letter.is(':last-child')){setTimeout(function(){hideLetter($letter.next(),$word,$bool,$duration);},$duration);}else if($bool){setTimeout(function(){hideWord(takeNext($word))},animationDelay);}if($letter.is(':last-child')&&$('html').hasClass('no-csstransitions')){var nextWord=takeNext($word);switchWord($word,nextWord);}}function showLetter($letter,$word,$bool,$duration){$letter.addClass('in').removeClass('out');if(!$letter.is(':last-child')){setTimeout(function(){showLetter($letter.next(),$word,$bool,$duration);},$duration);}else{if($word.parents('.cd-headline').hasClass('type')){setTimeout(function(){$word.parents('.cd-words-wrapper').addClass('waiting');},200);}if(!$bool){setTimeout(function(){hideWord($word)},animationDelay)}}}function takeNext($word){return(!$word.is(':last-child'))?$word.next():$word.parent().children().eq(0);}function takePrev($word){return(!$word.is(':first-child'))?$word.prev():$word.parent().children().last();}function switchWord($oldWord,$newWord){$oldWord.removeClass('is-visible').addClass('is-hidden');$newWord.removeClass('is-hidden').addClass('is-visible');}$('#getStarted').on('click',function(){$('#getStarted').hide();$('#getStartedForm').fadeIn();$('#getStartedEmail').focus();});$('#getStarted2').on('click',function(){$('#getStarted2').hide();$('#getStartedForm2').fadeIn();$('#getStartedEmail2').focus();});$(window).scroll(function(){var x=$(this).scrollTop(),transY=(x*0.5),scale=1+(x*0.0003),transform='translateY('+transY+'px) scale('+scale+') translate3d(0,0,0)';$('.header-bg').css({opacity:1-(x*0.0008),WebkitTransform:transform,MozTransform:transform,msTransform:transform,transform:transform});});$('.slider').slick({arrows:true,dots:true,autoplay:true,autoplaySpeed:9000,infinite:true,speed:300});var typeWriting=new TypeWriting({targetElement:document.getElementsByClassName('terminal-type-login')[0],inputString:'$ ssh phin@backend.phineas.io',typing_interval:90,blink_interval:'1s',cursor_color:'#91D127',},function(){$(".terminal-type-login").removeClass('typingCursor');$(".terminal-text-login-email").show('300',function(){var typeWritingLoginEmail=new TypeWriting({targetElement:document.getElementsByClassName('terminal-type-login-email')[0],inputString:'**************',typing_interval:90,blink_interval:'1s',cursor_color:'#91D127',},function(){$(".terminal-type-login-email").removeClass('typingCursor');$(".terminal-text-login-paired").show('300',function(){$(".terminal-login-wrapper").delay(1400).hide('fast',function(){var typeWritingBuckets=new TypeWriting({targetElement:document.getElementsByClassName('terminal-type-buckets')[0],inputString:'phin@phineas-misc:~# cat social.txt',typing_interval:90,blink_interval:'1s',cursor_color:'#91D127',},function(){$(".terminal-type-buckets").removeClass('typingCursor');$(".terminal-text-buckets").delay('300').show('300',function(){var typeWritingUpload=new TypeWriting({targetElement:document.getElementsByClassName('terminal-type-upload')[0],inputString:'phin@phineas-misc:~# keybase decrypt -i aboutMe.txt.asc',typing_interval:90,blink_interval:'1s',cursor_color:'#91D127',},function(){$(".terminal-type-upload").removeClass('typingCursor');$(".terminal-text-upload-password").delay('300').show('300',function(){var typeWritingUploadPassword=new TypeWriting({targetElement:document.getElementsByClassName('terminal-type-upload-password')[0],inputString:'*******************',typing_interval:90,blink_interval:'1s',cursor_color:'#91D127',},function(){$(".terminal-type-upload-password").removeClass('typingCursor');$(".terminal-text-upload").delay('400').show('300',function(){});});});});});});});});});});});});