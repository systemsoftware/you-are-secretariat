const { Window } = require('positron.js')
const { Menu, MenuItem } = require('positron.js/menu')
const path = require('path')

const win = new Window({
  width: 612,
  height: 972
})


win.on('ready', () => {

    win.setTitleBarStyle("hidden")

    win.setResizable(false)

    win.setTrafficLightVisible(false)

    if(process.platform === 'darwin') {
    const contextMenu = new Menu()
    contextMenu.addItem(
        new MenuItem({
            label: 'Traffic Lights',
            items: new Menu()
            .addItems([
                new MenuItem({
                    label: 'Show',
                    click: () => win.setTrafficLightVisible(true)
                }),
                new MenuItem({
                    label: 'Hide',
                    click: () => win.setTrafficLightVisible(false)
                })
            ]).template
        }),
    )

    win.setContextMenu(contextMenu)
} else {
    win.setContextMenu(new Menu())
}

    win.loadFile(path.join(__dirname, './index.html'))
    
})