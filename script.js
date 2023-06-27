var current = document.querySelector('.current');
    var next = document.querySelector('.next');
    var count = 1;

    function startCounter() {
      var interval = setInterval(animate, 1000);
    }

    function incrementCounter() {
      count++;
      current.innerText = count;
    }

    function animate() {
      next.classList.add('animate');

      setTimeout(function() {
        next.classList.remove('animate');
        current.innerText = count;
        incrementCounter();
        next.innerText = count + 1;
        next.classList.add('next');
        next = document.querySelector('.next');
      }, 500);
    }

    
    startCounter();












