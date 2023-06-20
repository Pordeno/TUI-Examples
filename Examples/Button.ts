
import { Computed , Tui } from 'TUI'
import { Button } from 'Components'
import { crayon } from 'Crayon'


const tui = new Tui({})
tui.dispatch()
tui.run()


const { floor } = Math

const rectangle = new Computed(() => {

    const { columns , rows } =
        tui.canvas.size.value

    return {

        height : 5 ,
        width : 20 ,

        column : floor( columns / 2 - 10 ) ,
        row : floor( rows / 2 - 2 )
    }
})


const theme = {

    disabled : crayon.bgLightBlack.black ,
    focused : crayon.bgCyan ,
    active : crayon.bgBlue ,
    base : crayon.bgLightBlue
}


new Button({

    parent : tui ,
    zIndex : 0 ,

    rectangle ,
    theme ,

    label : {
        text : `Test Label`
    }
})
