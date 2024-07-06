<script lang="ts" setup>
import { Layout, Menu, SubMenu, Popconfirm } from 'ant-design-vue'
import {
  DashboardOutlined,
  LogoutOutlined,
  QuestionCircleFilled,
  HistoryOutlined
} from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const collapsed = ref(false)
const selectedKeys = ref(1)

const store = useStore()
const router = useRouter()
const logout = () => {
  store.dispatch('logout')
  router.push('/login')
}
</script>

<template>
  <Layout.Sider
    v-model:collapsed="collapsed"
    collapsible
  >
    <div class="logo" />
    <Menu v-model:selectedKeys="selectedKeys.value" theme="dark" mode="inline">
      <Menu.Item>
        <RouterLink to="/home">
          <DashboardOutlined style="font-size: 2em" />
          <span>Dashboard</span>
        </RouterLink>
      </Menu.Item>
      <Menu.Item key="2">
        <RouterLink to="/history">
          <HistoryOutlined style="font-size: 2em" />
          <span>History</span>
        </RouterLink>
      </Menu.Item>
      <SubMenu key="sub1">
        <template #title>
          <span>
            <span>User</span>
          </span>
        </template>
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2">
        <template #title>
          <span>
            <span>Team</span>
          </span>
        </template>
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Popconfirm
        title="Are you sure you want to logout?"
        ok-text="Logout"
        cancel-text="Cancel"
        @confirm="logout"
      >
        <template #icon><QuestionCircleFilled style="color: red" /></template>
        <Menu.Item key="9">
            <LogoutOutlined style="font-size: 2em"/>
            <span>Logout</span>
        </Menu.Item>
      </Popconfirm>
    </Menu>
  </Layout.Sider>
</template>

<style>
/* .sidebar.sider {
  background: transparent;
  padding: .5rem;
  transition: .3s ease;
}

.sidebar.sider .ant-layout-sider-children{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .5);
  border-radius: .5em;
}

.sidebar.sider .ant-layout-sider-children ul{
  background: transparent;
}
.sidebar.sider .ant-layout-sider-trigger{
  width: 65px !important;
}
.sidebar.sider:not(.ant-layout-sider-collapsed) .ant-layout-sider-trigger{
  width: 185px !important;
} */

</style>