
/**
 *  Uses 🖍 𝗖𝗿𝗮𝘆𝗼𝗻 for theme colors.
 */

import { crayon } from 'Crayon'
import { Box } from 'Components'
import { Tui } from 'TUI'


/**
 *  Initializes ⌨ 𝗧𝗨𝗜
 */

const tui = new Tui({})
tui.dispatch()
tui.run()


/**
 *  Reads the terminal's size statically / once.
 */

const { columns , rows } =
    tui.canvas.size.peek()


/**
 *  Creates a 🔴 box with the window ( tui ) as parent.
 */

const outer = new Box({

    parent : tui ,
    zIndex : 0 ,

    theme : {
        base : crayon.bgRgb(255,0,0)
    },

    rectangle : {

        height : rows - 2 ,
        width : columns - 4 ,

        column : 2 ,
        row : 1
    }
})


/**
 *  Creates a ⚪ box with the 🔴 box as parent.
 */

const inner = new Box({

    parent : outer ,
    zIndex : 0 ,

    theme : {
        base : crayon.bgRgb(255,255,255)
    },

    rectangle : {

        height : rows - 4 ,
        width : columns - 8 ,

        column : 4 ,
        row : 2
    }
})
