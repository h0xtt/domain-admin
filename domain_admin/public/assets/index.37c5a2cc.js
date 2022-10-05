import{C as w}from"./ConnectStatus.4fb1b634.js";import{_ as h}from"./index.9ce2133b.js";import{r as d,o as m,c as _,d as s,w as o,f as r,B as c,y as b,A as D}from"./vendor.db57384a.js";const y={name:"",components:{ConnectStatus:w},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(a){this.currentRow=a,this.dialogVisible=!0},async handleDeleteClick(a){let t={id:a.id};const n=await this.$http.function(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},async handleStatusChange(a){let t={id:a.id};const n=await this.$http.function(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},handleUpdateSuccess(){this.$emit("on-success")}},created(){}};function C(a,t,n,f,i,p){const l=d("el-table-column"),u=d("ConnectStatus"),g=d("el-table");return m(),_("div",null,[s(g,{data:n.list,stripe:"",border:""},{default:o(()=>[s(l,{label:"ID",align:"center",prop:"id",width:"100"},{default:o(e=>[r("span",null,c(e.row.id||"-"),1)]),_:1}),s(l,{label:"\u5F00\u59CB\u65F6\u95F4","header-align":"center",align:"center",prop:"create_time"},{default:o(e=>[r("span",null,c(e.row.create_time||"-"),1)]),_:1}),s(l,{label:"\u7ED3\u675F\u65F6\u95F4","header-align":"center",align:"center",prop:"update_time"},{default:o(e=>[r("span",null,c(e.row.update_time||"-"),1)]),_:1}),s(l,{label:"\u6301\u7EED\u65F6\u95F4","header-align":"center",align:"center",prop:"total_time_label"},{default:o(e=>[r("span",null,c(e.row.total_time_label||"-"),1)]),_:1}),s(l,{label:"\u72B6\u6001","header-align":"center",align:"center",prop:"status",width:"60"},{default:o(e=>[s(u,{value:e.row.status},null,8,["value"])]),_:1}),s(l,{label:"\u9519\u8BEF\u4FE1\u606F","header-align":"center",align:"center",prop:"status"},{default:o(e=>[r("span",null,c(e.row.error_message||"-"),1)]),_:1})]),_:1},8,["data"])])}const v=h(y,[["render",C]]),S={name:"log-scheduler-list",props:{},components:{DataTable:v},data(){return{list:[],total:0,page:1,size:20,keywords:"",loading:!0,dialogVisible:!1}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let a={ticket:this.ticket,page:this.page,size:this.size,keywords:this.keywords};const t=await this.$http.getLogSchedulerList(a);t.code==0&&(this.list=t.data.list,this.total=t.data.total),this.loading=!1},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()}},created(){this.getData()}},$={class:"app-container"};function k(a,t,n,f,i,p){const l=d("DataTable"),u=d("el-pagination"),g=b("loading");return m(),_("div",$,[D(s(l,{list:i.list,onOnSuccess:p.resetData,onOnEditRow:a.handleEditRow},null,8,["list","onOnSuccess","onOnEditRow"]),[[g,i.loading]]),s(u,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:i.total,"page-size":i.size,"onUpdate:page-size":t[0]||(t[0]=e=>i.size=e),"current-page":i.page,"onUpdate:current-page":t[1]||(t[1]=e=>i.page=e),onCurrentChange:p.getData},null,8,["total","page-size","current-page","onCurrentChange"])])}const V=h(S,[["render",k]]);export{V as default};