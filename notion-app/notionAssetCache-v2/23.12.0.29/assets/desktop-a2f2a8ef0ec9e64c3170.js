"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9380],{60951:(e,t,a)=>{a.r(t),a.d(t,{PushNotification:()=>y});var o=a(96486),r=a.n(o),s=a(40902),c=a(66897),i=a(99036),n=a(45946),l=a(55061),d=a(21202),m=a(6287),u=a(13493),p=a(70279),b=a(19889),f=a(70203),g=a(44805),N=a(64002);function y(e){const{activity:t,getRecordValue:a,baseURL:o,userTimeZone:y,intl:_}=e,k=n.om.fromGetRecordValueFn(a),M=(0,l.P6)({...e}),J=(0,l.XW)(M,_),v=(0,l.oP)({...e,intl:_}),q=(0,l.iR)({...e,intl:_}),j=(0,l.rn)({...e,intl:_});switch(t.type){case"top-level-block-created":return{subject:_.formatMessage(l.qJ.topLevelBlockCreated,{userName:J,targetName:v,spaceName:j})};case"top-level-block-deleted":return{subject:_.formatMessage(l.qJ.topLevelBlockDeleted,{userName:J,targetName:v,spaceName:j})};case"collection-row-created":return{subject:_.formatMessage(l.qJ.collectionRowCreated,{userName:J,targetName:v,collectionName:q})};case"collection-row-deleted":return{subject:_.formatMessage(l.qJ.collectionRowDeleted,{userName:J,targetName:v,collectionName:q})};case"block-edited":{let c;if(t.edits){const n=t.edits[0];if("block-changed"===n.type){const t=n.block_data.after.block_value;if("page"===t.type&&t.parent_table===m.v){const t=n.block_schema||i.Kc(_),o=s.OS({before:n.block_data.before.block_value,after:n.block_data.after.block_value,schema:t}).filter((e=>{const a=t[e];return a&&"formula"!==a.type})).map((o=>{const r=t[o],s=r?r.name:void 0,c=(0,l.v4)({intl:_,property:o,schema:t,block:n.block_data.after.block_value,getRecordValue:a,userTimeZone:e.userTimeZone,baseURL:e.baseURL})||_.formatMessage(l.qJ.emptyBlockEditedProperty);return _.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:s,propertyValue:c})})),d=s.B9({before:n.block_data.before.block_value,after:n.block_data.after.block_value}),m=r().compact(d.map((e=>{const t=(0,l._u)({formatProperty:e,intl:_}),o=(0,l.W9)({formatProperty:e,intl:_,block:n.block_data.after.block_value,getRecordValue:a});if(t&&o)return _.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:t,propertyValue:o})})));c=_.formatList(o.concat(m),{type:"conjunction",style:"narrow"})}else c=(0,l._2)({intl:_,blockValue:t,getRecordValue:a,baseURL:o,userTimeZone:y})}else if("block-created"===n.type){const e=n.block_data.block_value;c=(0,l._2)({intl:_,blockValue:e,getRecordValue:a,baseURL:o,userTimeZone:y})}else if("block-deleted"===n.type){const e=n.block_data.block_value,t=(0,l._2)({intl:_,blockValue:e,getRecordValue:a,baseURL:o,userTimeZone:y});c=_.formatMessage(l.qJ.blockDeletedEditBody,{renderedBlock:t})}}return{subject:_.formatMessage(l.qJ.blockEditedNotification,{userName:J,blockName:v}),body:c}}case"block-property-edited":const R={subject:_.formatMessage(l.qJ.blockPropertyEditedNotification,{userName:J,blockName:v}),body:void 0};if(t.edits){const o=t.edits[0],r=Object.entries(o.property_updates).filter((e=>{let[t,a]=e;const r=o.filtered_block_schema[t];return r&&!["formula","created_by","created_time"].includes(r.type)})).map((t=>{let[r,s]=t;const c=o.filtered_block_schema[r],i=c?c.name:void 0,n=(0,l.Wy)({intl:_,propertySchema:c,textValue:s.after.value,getRecordValue:a,userTimeZone:e.userTimeZone,baseURL:e.baseURL})||_.formatMessage(l.qJ.emptyBlockEditedProperty);return _.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:i,propertyValue:n})}));R.body=_.formatList(r,{type:"conjunction",style:"narrow"})}return R;case"permissions-edited":return{subject:_.formatMessage(l.qJ.userEditedPermissionsFor,{userName:J,targetName:v}),body:(0,l.gt)({intl:_,activity:t,getRecordValue:a,userTimeZone:e.userTimeZone})};case"user-mentioned":return{subject:_.formatMessage(l.qJ.userMentionedIn,{userName:J,targetName:v}),body:(0,l.kU)({intl:_,getRecordValue:a,baseURL:o,userTimeZone:e.userTimeZone,blockId:t.mentioned_block_id,property:t.mentioned_property})};case"commented":{let o;if(t.edits){const r=t.edits[0];if("comment-created"===r.type){const t=a({table:p.x_,id:r.comment_id,spaceId:r.space_id}),s=r.comment_data||t;s&&(o=`💬 ${g.Xh({intl:_,textValue:s.text,getRecordModel:k,userTimeZone:e.userTimeZone})}`)}else if("comment-changed"===r.type)o=`💬 ${g.Xh({intl:_,textValue:r.comment_data.after.text,getRecordModel:k,userTimeZone:e.userTimeZone})}`;else{const t=a({table:p.x_,id:r.comment_id,spaceId:r.space_id}),s=r.comment_data||t;if(s){const t=g.Xh({intl:_,textValue:s.text,getRecordModel:k,userTimeZone:e.userTimeZone});o=_.formatMessage(l.qJ.userDeletedComment,{commentText:t})}}}return{subject:_.formatMessage(l.qJ.userCommentedSubject,{userName:J,targetName:v}),body:o}}case"user-invited":const V=(0,N.pE)(v),T=V.length>0?V:_.formatMessage(l.qJ.defaultPageName);if(t.permission_group_id)return{subject:_.formatMessage(l.qJ.userAddedToSpace,{userName:J,workspaceName:T})};return{subject:0===M.filter(c.uC).length?_.formatMessage(l.qJ.userInvitedToSpaceByBot,{workspaceName:T}):_.formatMessage(l.qJ.userInvitedToSpace,{userName:J,workspaceName:T})};case"collection-edited":{let e,a=_.formatMessage(l.qJ.userEditedCollectionSubject,{userName:J,collectionName:v});if(t.edits){const o=t.edits[0];if("collection-changed"===o.type&&o.collection_data){const t=o.collection_data.after?o.collection_data.after.description:void 0,r=o.collection_data.before?o.collection_data.before.description:void 0;r&&!t?a=_.formatMessage(l.qJ.collectionDescriptionDeleted,{userName:J,collectionName:v}):!r&&t?(a=_.formatMessage(l.qJ.collectionDescriptionCreated,{userName:J,collectionName:v}),e=f.Jc(t)):r&&t&&s.Dn(r,t)&&(e=f.Jc(t))}else if("collection-created"===o.type&&o.collection_data){const t=o.collection_data.description;t&&(a=_.formatMessage(l.qJ.userCreatedCollectionSubject,{userName:J,collectionName:v}),e=f.Jc(t))}}return{subject:a,body:e}}case"collection-view-edited":const h=e.getRecordValue({table:u.n,id:t.collection_view_id,spaceId:t.space_id}),Z=h&&h.name||_.formatMessage(l.qJ.untitledCollectionView);return{subject:_.formatMessage(l.qJ.collectionViewEditedSubject,{userName:J,collectionViewName:Z,collectionName:v})};case"collection-property-edited":const w=t.edits&&t.edits[0],U=w&&("collection-property-changed"===w.type?w.collection_property_data.after.name:w.collection_property_data.name)||_.formatMessage(l.qJ.collectionPropertyEditedUnknown);return t.collection_property_id,{subject:_.formatMessage(l.qJ.collectionPropertyEditedSubject,{userName:J,propertyType:U,collectionName:v})};case"reminder":return{subject:_.formatMessage(l.qJ.reminderSubject,{pageName:v}),body:(0,l.kU)({getRecordValue:a,baseURL:o,userTimeZone:e.userTimeZone,blockId:t.reminder_block_id,property:t.reminder_property,intl:_})};case"permission-group-edited":return{subject:(0,l.pF)({activity:t,intl:_,userName:J,targetName:v})};case"page-locked":case"page-unlocked":return{subject:"page-locked"===t.type?_.formatMessage(l.qJ.pageLockedActivity,{userName:J,pageName:v}):_.formatMessage(l.qJ.pageUnlockedActivity,{userName:J,pageName:v})};case"email-edited":return{subject:_.formatMessage(l.qJ.emailEditedActivity,{userName:J})};case"access-requested":return{subject:t.parent_table===d.iU?_.formatMessage(l.qJ.accessRequestedSubject,{userName:J,pageName:v}):_.formatMessage(l.qJ.membershipRequestedSubject,{userName:J,workspaceName:v})};case"page-deleted":return{subject:_.formatMessage(l.qJ.pageDeletedActivity,{userName:J})};case"page-restored":return{subject:_.formatMessage(l.qJ.pageRestoredActivity,{userName:J})};case"page-permanently-deleted":return{subject:_.formatMessage(l.qJ.pagePermanentlyDeletedActivity,{userName:J})};case"team-membership-edited":return{subject:_.formatMessage(l.qJ.userInvitedToTeam,{userName:J,teamName:v})};case"private-content-transferred":const E=t.edits&&t.edits[0].from_user_id;if(!E)return{subject:_.formatMessage({description:"Notification that shows when private content is transferred but there is no from user name.",defaultMessage:"{author} transferred private content to you: {pageName}",id:"pushNotification.privateContentTransferred.noFromUserName"},{author:J,pageName:v})};const L=a({table:b.KJ,id:E});return{subject:_.formatMessage(l.qJ.privateContentTransferred,{author:J,pageName:v,fromUserName:L&&n.kk.fromValue(b.KJ,L).getFullName(_)})};case"permission-group-mentioned":const x=(0,l.Bg)({spaceId:t.space_id,permissionGroupId:t.mentioned_group_id,getRecordValue:e.getRecordValue}),C=(0,l.jQ)(_,x);return{subject:_.formatMessage(l.qJ.permissionGroupMentionedIn,{userName:J,targetName:v,groupName:C}),body:(0,l.kU)({intl:_,getRecordValue:a,baseURL:o,userTimeZone:e.userTimeZone,blockId:t.navigable_block_id,property:t.mentioned_property})};case"verification-expired":return{subject:_.formatMessage(l.qJ.verificationExpired,{pageName:v})}}}}}]);