/*! konyviz 2015-05-19 */
var createComment=function(a,b){var c={};b?(c.createdById=b.user_guid,c.createdBy=b.first_name+" "+b.last_name,c.createdByEmail=b.primary_email):(c.createdById=null,c.createdBy="Anonymous",c.createdByEmail=null);var d=generateCommentId();return c.commentId=d,c.createdOn=(new Date).getTime(),c.lastModifiedTime=c.createdOn,c.active=1,c.widgetId=a.widgetId,c.formId=a.formId,c.channel=a.channel,c.comment=a.comment,c},updateComment=function(a,b,c){var d=a.commentId,e=a.widgetId,f=c.comments[e];if("undefined"!=typeof f[d]){var g=b?b.user_guid:null;if(!f[d].createdById&&g)a.createdById=g,a.createdBy=b.first_name+" "+b.last_name,a.createdByEmail=b.primary_email,a.createdOn=(new Date).getTime();else if(g!=f[d].createdById)return c;a.active=Number(a.active),a.lastModifiedTime=(new Date).getTime(),f[d]=a,c.comments[e]=f}return c},generateCommentId=function(){return"xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})},getCommentParam=function(a){return{guid:a.commentId,created_on:Number(a.createdOn),created_by_guid:a.createdById,created_by:a.createdBy,created_by_email:a.createdByEmail,modified_on:Number(a.lastModifiedTime),comment:a.comment,comment_src:"undefined"!=typeof module&&module.exports?COMMENT_SRC_APP.VIZ:COMMENT_SRC_APP.FP,active:a.active}},getNoteParam=function(a){return{guid:a.noteGuid,widget_id:a.widgetId,form_id:a.formId,form_channel:a.channel,created_on:Number(a.createdOn),modified_on:Number(a.modifiedOn),active:a.active}},formatComment=function(a){return{commentId:a.guid,widgetId:a.widget_id,formId:a.form_id,createdOn:new Date(a.created_on).getTime(),createdById:a.created_by_guid,createdBy:a.created_by,createdByEmail:a.created_by_email,lastModifiedTime:new Date(a.modified_on).getTime(),comment:a.comment,commentSrc:a.comment_src,active:a.active,channel:a.form_channel}},annotationsUtil={createComment:createComment,updateComment:updateComment,generateCommentId:generateCommentId,getCommentParam:getCommentParam,getNoteParam:getNoteParam,formatComment:formatComment},COMMENT_SRC_APP={FP:"functional preview",VIZ:"visualizer"};"undefined"!=typeof module&&module.exports&&(module.exports=annotationsUtil);