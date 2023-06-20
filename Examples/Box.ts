
import { crayon } from 'Crayon'
import { Box } from 'Components'
import { Tui } from 'TUI'


const tui = new Tui({})

tui.dispatch()
tui.run()


const { columns , rows } =
    tui.canvas.size.peek()


const outer = new Box({

    parent : tui ,
    zIndex : 0 ,

    theme : {
        base : crayon.bgBlue
    },

    rectangle : {

        height : rows - 2 ,
        width : columns - 4 ,

        column : 2 ,
        row : 1
    }
})


const inner = new Box({

    parent : outer ,
    zIndex : 0 ,

    theme : {
        base : crayon.bgLightRed
    },

    rectangle : {

        height : rows - 4 ,
        width : columns - 8 ,

        column : 4 ,
        row : 2
    }
})
