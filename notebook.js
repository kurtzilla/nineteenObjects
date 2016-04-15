var Notebook = {
    pages: [],
    maxPages: 100,
    getNotebookContents: function () {
        var contents = '';
        for(var i=0;i<this.pages.length;i++){
            contents += this.getPageContents(i) + '\n';
        }

        return contents;
    },
    getPageContents: function(idx) {
        if(idx < this.pages.length) {
            return this.pages[idx];
        }

        return 'index out of bounds';
    },
    writeToPage: function(txt, idx, append) {
        //if no index specifed - write to next page
        if(!idx){
            if(this.pages.length < this.maxPages) {
                this.pages.push(txt);
            } else {
                return 'the notebook is full';
            }
        } else {
            if(!idx) {
                return 'please specify an index';
            } else {
                if(!append) {
                    this.pages[idx] = txt;
                } else {
                    this.pages[idx] += txt;
                }
            }
        }
    }
};

console.log(Notebook);
Notebook.writeToPage("I've been alone with you");
Notebook.writeToPage("Inside my mind");
Notebook.writeToPage("And in my dreams I've kissed your lips");
Notebook.writeToPage("A thousand times");
Notebook.writeToPage("I sometimes see you");
Notebook.writeToPage("Pass outside my door");
Notebook.writeToPage("Hello!");
Notebook.writeToPage("Is it me you're looking for?");
Notebook.writeToPage("I can see it in your eyes");
Notebook.writeToPage("I can see it in your smile");
Notebook.writeToPage("You're all I've ever wanted");
Notebook.writeToPage("And my arms are open wide");
Notebook.writeToPage("'cause you know just what to say");
Notebook.writeToPage("And you know just what to do");
Notebook.writeToPage("And I want to tell you so much");
Notebook.writeToPage("I love you");

Notebook.writeToPage(" [echo]Pass outside my door [echo]Pass outside my door", 5, true);

console.log(Notebook.getPageContents());//test error
console.log(Notebook.getPageContents(5));
console.log(Notebook.getNotebookContents());
