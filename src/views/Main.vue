<template>
  <div style="display:flex; width:100%;">
    <div class="main__left__bar">
      <div class="main__dashboards">
		<div class="dashboard__title">
			Dashboards	
		</div>
        <div @click="todo()" :class="{dashboard__item__click:$store.state.status.plans, dashboard__item:!$store.state.status.plans}">
          <img src="../assets/list-24px.svg" alt="calendar" class="dashboard__icon" />
          Plans
        </div>
		<div @click="calendar()" :class="{dashboard__item__click:$store.state.status.calendar, dashboard__item:!$store.state.status.calendar}">
          <img src="../assets/calendar_today-24px.svg" alt="calendar" class="dashboard__icon" />
          Calendar
        </div>
        <div @click="memo()" style="width:fit-content; text-align:left" :class="{dashboard__item__click:$store.state.status.memo, dashboard__item:!$store.state.status.memo}">
          <img src="../assets/note-24px.svg" alt="calendar" class="dashboard__icon" />
          Memo
        </div>
      </div>
      <div class="main__nofitications">
		  <div class="dashboard__title">
			Progress	
			</div>
		  <div class="main__notification__plan">
			  <div class="main__notification__plans">
					{{$store.state.userdata.userdata.plane_left}}
				</div>
			  <div class="main__notification__title">진행중인 목표</div>
		  		
		  		<div class="main__notification__plans" style="margin-top: 20%;">
					{{$store.state.userdata.userdata.complete}}
				</div>
		  	  <div class="main__notification__title">달성한 목표</div>
		  		
		</div>
	</div>
    </div>
    <div style="width:100%;height:100%; position:relative; background-color:#f1f3f5">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/topbar2.vue";
export default {
  name: "Main",
  components: {
    Topbar
  },
	data(){
	return{
		imageurl:"http://nulllove-rgobq.run.goorm.io/"+this.$store.state.userdata.email+'.png',
		plane_left:0
	}	
	},
  created() {
	this.$store.state.status.planner = true;
	this.$store.state.status.community = false;
	  	this.$store.state.status.memo = false;

	 this.$store
      .dispatch("token", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        if (response.data.result == true) {
			this.$store.state.userdata = response.data.userdata;
        } else {
        }
      })
      .catch(e => {
      });
  },
	beforeDestory(){
		this.$store.state.status.planner = false;
		this.$store.state.status.community = false;
		this.$store.state.status.memo = false;
	},
  methods: {
	todo() {
      this.$router.push("/wrap/main");
    },
    calendar() {
      this.$router.push("/wrap/main/calendar");
    },
    memo() {
      this.$router.push("/wrap/main/memo");
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.main {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.main__wrap {
  display: flex;
  width: 100%;
  height: 100%;
}
.main__left__bar {
  width: 350px;
  height: 100%;
  background-color: #f1f3f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 30px;
  flex-direction: column;
}
.main__left__bar > * {
  margin: 7px;
}
	.main__nofitications>*{
		margin:10px 0px;
		font-family: NanumSR;
		font-size: 16px;
	}
	.main__nofitications__img{
		width:50px;
		height:50px;
		border-radius:100%;
	}
.main__dashboards {
  background-color: white;
  width: 85%;
  height: 30vh;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  padding: 5% 10% 10% 10%;
  box-sizing: border-box;
}
.main__dashboards > * {
  font-size: 18px;
  font-family: ProductSansM;
}
.main__nofitications {
	margin-top:10%;
	padding: 5% 10% 10% 10%;
  background-color:white;
  width: 85%;
  height: 40vh;
  border-radius: 20px;
	display:flex;
	justify-content: center;
  align-items: flex-start;
	flex-direction:column;
}
.dashboard__title{
	color: black;
	font-size: 22px;
	font-family: "ProductSansM";
	margin-bottom: 12px;
}
.dashboard__item {
  padding: 4px;
  border-radius: 4px;
  font-size:18px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard__item:hover {
  transition: 0.2s;
  background-color: #E3E1FF;
}
.dashboard__item__click {
  
  transition: 0.2s;
  background-color: #6c63ff;
  padding: 4px;
  border-radius: 4px;
  font-size:18px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
	.dashboard__item__click img{
		transition:0.2s;
		filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
.dashboard__item.on {
  transition: 0.2s;
  background-color: #E3E1FF;
}
.dashboard__icon {
  margin-right: 8px;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: scale(1);
}
	.main__notification__plan{
		display:flex;
		flex-direction:column;
		align-items:left;
		justify-content:center;
		height:80%;
		width:80%;
		margin-left:4px;
	}
.main__notification__title {
	/* background-color: #E3E1FF; */
    color: black;
    margin-top: 4px;
	margin-bottom:12px;
    font-size: 18px;
    font-family: "NanumSB";
    text-align: left;
	box-sizing:content;
}
.main__notification__plans {
	width:100%;
    color:#6c63ff;
    font-size: 42px;
    font-family: "ProductSansM";
    text-align: left;
}
</style>