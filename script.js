let buttons = document.querySelectorAll('.buttonbar button');
        let pages = document.querySelectorAll('.content .page');

        buttons.forEach((button) => {
            button.addEventListener('click', ()=>{
                let pageID = button.getAttribute('data-page');

                pages.forEach((page) => page.classList.add('hidden'));

                document.getElementById(pageID).classList.remove('hidden');
            });
        });