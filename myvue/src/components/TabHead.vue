<template>
  <van-tabs v-model="active">
    <van-tab title="电脑办公">
      <div class="computureWork">
        <ComputureWork></ComputureWork>
      </div>
    </van-tab>
    <van-tab title="生活家电">
      <div class="liveElectronic">
      <LiveElectronic></LiveElectronic>
      </div>
    </van-tab>
    <van-tab title="通信工具">
      <div class="communicationTools">
      <CommunicationTools></CommunicationTools>
      </div>
    </van-tab>
    <van-tab title="交通工具">
      <div class="vehicle">
      <Vehicle></Vehicle>
      </div>
    </van-tab>
    <van-tab title="其它">
      <div class="others">
      <Others></Others>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
  import ComputureWork from '@/components/dnbgComponent/ComputureWork'
  import LiveElectronic from '@/components/shjdComponent/LiveElectronic'
  import CommunicationTools from '@/components/txgjComponent/CommunicationTools'
  import Vehicle from '@/components/jtgjComponent/Vehicle'
  import Others from '@/components/qtComponent/Others'
  export default {
    data() {
      return {
        active: 0,
      };
    },
    components: {
      ComputureWork,
      LiveElectronic,
      CommunicationTools,
      Vehicle,
      Others
    },
  };
</script>

<style scoped>

</style>
