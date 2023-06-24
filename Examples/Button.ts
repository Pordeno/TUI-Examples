
/**
 *  Uses 🖍 𝗖𝗿𝗮𝘆𝗼𝗻 for theme colors.
 */

import { Computed , Theme , Tui } from 'TUI'
import { Button } from 'Components'
import { crayon } from 'Crayon'


/**
 *  Initializes ⌨ 𝗧𝗨𝗜
 */

const tui = new Tui({})
tui.dispatch()
tui.run()


/**
 *  Constructs a dynamically resized bounding box.
 */

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


/**
 *  Constructs a component style.
 */

const theme = {

    disabled : crayon.bgLightBlack.black ,
    focused : crayon.bgCyan ,
    active : crayon.bgBlue ,
    base : crayon.bgLightBlue

} satisfies Theme


/**
 *  Creates a button labeled `Test Button`
 *  and adds it to the window ( tui )
 */

new Button({

    parent : tui ,
    zIndex : 0 ,

    rectangle ,
    theme ,

    label : {
        text : `Test Button`
    }
})
