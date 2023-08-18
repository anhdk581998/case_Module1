class InputHandler{
    constructor() {
    this.keys = [];
    window.addEventListener('keydown', event => {

        if(event.key ==='ArrowDown'||
            event.key==='ArrowUp' ||
            event.key === 'ArrowLeft'||
            event.key === 'ArrowRight'||
            event.key === 'Control'
            && this.keys.indexOf(event.key)=== -1){
            this.keys.push(event.key);
        }
        console.log(event.key, this.keys);
    })

        window.addEventListener('keyup',  event =>
        {
            if (event.key==='ArrowUp'||
                event.key ==='ArrowDown'||
                event.key === 'ArrowLeft'||
                event.key === 'ArrowRight'||
                event.key === 'Control'

            ){
                this.keys.splice(event.key.indexOf(event.key),1);
            }
            console.log(event.key, this.keys);
        })
    }
}