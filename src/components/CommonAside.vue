<template>
    <el-menu :default-active="activerouter" background-color="#5c5464" text-color="#fff" active-text-color="#ffd04b"
        class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path + ''" :key="item.path">
            <i :class="'el-icon' + '-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
            <!-- <div>{{item.path}}</div> -->
        </el-menu-item>
        <el-submenu  v-for="item in hasChildren" :index="item.path + ''" :key="item.path">
            <template slot="title">
                <i :class="'el-icon' + '-' + item.icon"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
                <el-menu-item @click="clickMenu(subItem)" :class="'el-icon' + '-' + subItem.icon" :index="subIndex + ''">
                    {{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'CommonAside',
    data() {
        return {
            menu: [],
        };

    },
    mounted() {
        this.$store.commit('setActiverouter',this.$route.path)
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            console.log(item);
            this.$router.push({
                name: item.name
            })
            this.$store.commit('selectMenu', item)
        }
    },
    computed: {
        noChildren() {
            return this.asyncMenu.filter(item => !item.children)
        },
        hasChildren() {
            return this.asyncMenu.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        },
        asyncMenu() {
            return this.$store.state.tab.menu
        },
        activerouter(){
            return this.$store.state.tab.activerouter
        }
    },
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100%;
    border: none;

    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
    }

}
</style>


