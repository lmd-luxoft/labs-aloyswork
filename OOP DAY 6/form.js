class Form
{
    #frm = undefined;
    constructor(document, callback_open)
    {
        this.#frm = document;
        //this.#frm.addEventListener("submit", callback_open);
               
    }

    show()
    {
        this.#frm.style.visibility='visible';     
    }

    hide()
    {
       this.#frm.style.visibility='hidden';     
    }

    get User()
    {
        return this.#frm.elements[0].value;
    }

    get Password()
    {
        return this.#frm.elements[1].value;
    }
}