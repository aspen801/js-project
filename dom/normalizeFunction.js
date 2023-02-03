function normalizeClasses(){
    const elements = document.body.getElementsByTagName('*');
    Array.from(elements).forEach(element => {
        <body onload="normalizeClasses()">
        <div class="text-center row-b">Bam</div>
    </body>
           element.classList.forEach(className => {
            const newClassName = _.camelCase(className);
            element.classList.replace(className, newClassName);
          });
    })
}


