import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null,
        menu: [],
        activerouter:'',
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //选中的侧标签出现对应的tag
        selectMenu(state, value) {
            if (value.name !== 'home') {
                state.currentMenu = value
                const result = state.tabsList.findIndex(item => item.name === value.name)
                if (result === -1) {
                    state.tabsList.push(value)
                }
            } else {
                state.currentMenu = null
            }
        },
        //设置路由
        setActiverouter(state, val){
            state.activerouter = val
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
            console.log(35,this);
        },
        //获取返回的动态路由
        setMenu(state, val) {
            console.log(36,val);
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        //清空路由
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        //动态添加路由
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../view/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../view/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}