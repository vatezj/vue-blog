<template>
  <div class="index-left">
    <div class="avatar">
      <mu-avatar :size="size">
        <img src="http://ontzi4vtc.bkt.clouddn.com/logo.png">
      </mu-avatar>
      <div>
        JvateHu
      </div>
       <mu-divider></mu-divider>
    </div>
    <div>
      <mu-paper>
        <mu-list>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Inbox</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <mu-icon value="grade"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Stared</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <mu-icon value="send"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Sent mail</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <mu-icon value="drafts"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Drafts</mu-list-item-title>
          </mu-list-item>
        </mu-list>
       
        <mu-list>
          <mu-list-item button :ripple="false">
            <mu-list-item-title>All mail</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="info"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-title>Trash</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="info"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-title>Spam</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="info"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-title>Follow up</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="info"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </mu-paper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'title',
  data() {
    return {
      size: 100,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.index-left {
  // text-align: center;
  padding: 50px 50px 0 50px;
  margin-top: 20px;
  .avatar {
    text-align: center;
  }
}
</style>