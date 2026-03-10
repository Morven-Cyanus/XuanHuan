import{r as m}from"./index-qj6APO8R.js";const l="Morven-Cyanus/Xuanhuan",p="xuanhuan-application",A=()=>{const r=m(!1),a=m(null),i=()=>localStorage.getItem("github_token");return{isLoading:r,error:a,createApplication:async e=>{const n=i();if(!n)throw new Error("GitHub Token 未配置。请先在管理后台配置 Token。");r.value=!0,a.value=null;try{const s=`[申请] ${e.daohao} - ${e.name}`,o=`
## 加入申请

**道号**: ${e.daohao}
**名字**: ${e.name}
**称号**: ${e.title}
**原型**: ${e.prototype}
**势力**: ${e.force}
**故乡**: ${e.hometown}
**主脉**: ${e.sect||"未填写"}
**天府职位**: ${e.elitePosition||"未填写"}
**道则**: ${e.taoZe}
**神界**: ${e.aliasName||"未填写"}
**生地**: ${e.birthPlace||"未填写"}

---
*申请于: ${new Date().toLocaleString("zh-CN")}*
`,t=await fetch(`https://api.github.com/repos/${l}/issues`,{method:"POST",headers:{Authorization:`token ${n}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify({title:s,body:o,labels:[p,"pending"]})});if(!t.ok){const u=await t.json();throw new Error(u.message||"提交申请失败")}const d=await t.json();return r.value=!1,d}catch(s){throw a.value=s.message,r.value=!1,s}},getApplications:async()=>{const e=i();if(!e)throw new Error("GitHub Token 未配置");r.value=!0,a.value=null;try{const n=await fetch(`https://api.github.com/repos/${l}/issues?labels=${p}&state=all&per_page=100`,{headers:{Authorization:`token ${e}`,Accept:"application/vnd.github.v3+json"}});if(!n.ok)throw new Error("获取申请失败");const o=(await n.json()).map(t=>{const d=t.labels.some(c=>c.name==="pending"),u=t.labels.some(c=>c.name==="approved"),b=t.labels.some(c=>c.name==="rejected");let h="pending";return u&&(h="approved"),b&&(h="rejected"),{id:t.number,issueUrl:t.html_url,issueNumber:t.number,body:t.body,status:h,createdAt:new Date(t.created_at).toLocaleString("zh-CN"),updatedAt:new Date(t.updated_at).toLocaleString("zh-CN"),daohao:t.title.match(/\[(.*?)\]\s*(.*?)\s*-\s*(.*)/)?.[2]||"未知",name:t.title.match(/\[(.*?)\]\s*(.*?)\s*-\s*(.*)/)?.[3]||"未知"}});return r.value=!1,o}catch(n){throw a.value=n.message,r.value=!1,n}},updateApplicationStatus:async(e,n)=>{const s=i();if(!s)throw new Error("GitHub Token 未配置");r.value=!0,a.value=null;try{const o=[p,n],t=await fetch(`https://api.github.com/repos/${l}/issues/${e}`,{method:"PATCH",headers:{Authorization:`token ${s}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify({labels:o})});if(!t.ok)throw new Error("更新状态失败");return r.value=!1,await t.json()}catch(o){throw a.value=o.message,r.value=!1,o}},addComment:async(e,n)=>{const s=i();if(!s)throw new Error("GitHub Token 未配置");try{const o=await fetch(`https://api.github.com/repos/${l}/issues/${e}/comments`,{method:"POST",headers:{Authorization:`token ${s}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify({body:n})});if(!o.ok)throw new Error("添加评论失败");return await o.json()}catch(o){throw a.value=o.message,o}},setGithubToken:e=>{localStorage.setItem("github_token",e)},clearGithubToken:()=>{localStorage.removeItem("github_token")},getGithubToken:i}};export{A as u};
