module.exports = {
   PERMISSIONS : {
        ADMIN_URLs : ['/api/plan/core/*','/api/plan/active/*','/api/plan/customize/*','/api/plan/deactivate/*','/api/plan/activate/*','/api/plan/delete'],
        AUTH_URLs : ['/api/plan/*','/api/product/*','/api/order/*']
   },
   ROLES : {
       ADMIN : 2,
       USER : 3,
       SUPER_ADMIN : 1
   }
}