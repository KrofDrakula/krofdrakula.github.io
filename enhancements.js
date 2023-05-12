(function() {
    
    // Collapsible figures
    Q('.collapsible').forEach(function(container) {
        container.addEventListener('click', function(ev) {
            if (ev.target.className.indexOf('toggler') == -1)
                return;
            if (hasClass(container, 'collapsed'))
                removeClass(container, 'collapsed');
            else
                addClass(container, 'collapsed');
        });
        addClass(container, 'collapsed');
    });
    
    // Table of contents
    updateTOC(document.querySelector('#toc'), ['toc', 'main', 'back-to-top']);
    
    // Make all external links open in new windows
    Q('a[href]').forEach(function(link) {
        if (/^https?:\/\//g.test(link.getAttribute('href')))
            link.target = '_blank';
    });
    
    // Back to top link visibility
    var backToTop = Q('#back-to-top')[0];
    window.addEventListener('scroll', function() {
        backToTop.style.display = window.scrollY > 0 ? 'block' : 'none';
    });
    
    // Utility functions
    function removeClass(el, className) {
        el.className = el.className.replace(new RegExp('\s*' + className + '\s*', 'g'), '');
    }
    
    function addClass(el, className) {
        el.className += ' ' + className;
    }
    
    function hasClass(el, className) {
        return (new RegExp('\s*' + className + '\s*', 'g')).test(el.className);
    }
    
    function trim(str) {
        return str.toString().replace(/^\s+|\s+$/g, '');
    }
    
    function Q(selector, context) {
        context = context || document;
        return [].slice.apply(context.querySelectorAll(selector));
    }
    
    function updateTOC(container, ignore) {
        while(container.firstChild)
            container.removeChild(container.firstChild);
        
        Q('[id]').filter(function(el) {
            return trim(el.id).length > 0 && ignore.indexOf(el.id) == -1;
        }).map(function(el) {
            return { title: trim(el.textContent), id: el.id };
        }).forEach(function(entry) {
            var li = document.createElement('li');
            li.innerHTML = '<a href="#' + entry.id + '">' + entry.title + '</a>';
            container.appendChild(li);
        });
    }
    
})();
