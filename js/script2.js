
var superSlide = function(slider) {
  
    this.sliderItems = slider.getElementsByTagName('div');
    this.dots = slider.querySelector('.dots');
    
    this.init = function() {
      for (i = 0; i < this.sliderItems.length; i++) {
        var dot = document.createElement('li');
        dot.classList.add('list-inline-item');
        dot.setAttribute("data-slide-num", i);
        dot.innerHTML = i;
        dot.classList.add(i === 0 ? 'active' : 'inactive');
        dot.addEventListener("click", this.runSlider.bind(this));
        this.dots.appendChild(dot);
      }
    }
    
    this.runSlider = function(evt) {
      var activeDot = evt.currentTarget;
      var dnum = activeDot.dataset.slideNum;
      for (i = 0; i < this.sliderItems.length; i++) {
        var cssIdx = i + 1;
        var inactiveDot = slider.querySelector('.list-inline-item:nth-child(' + cssIdx + ')');
        this.sliderItems[i].classList.remove('active');
        this.sliderItems[dnum].classList.add('active');
        inactiveDot.classList.remove('active');
        activeDot.classList.add('active');
      }
    }
    
    this.init()
    
  }
  
  var slider1 = new superSlide(document.getElementById('slider'))
  var slider2 = new superSlide(document.getElementById('slider2'))
  