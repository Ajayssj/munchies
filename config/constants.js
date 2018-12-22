module.exports = {
   PERMISSIONS : {
        ADMIN_URLs : [
            '/api/plan/core/*',
            '/api/plan/active/*',
            '/api/plan/customize/*',
            '/api/plan/deactivate/*',
            '/api/plan/activate/*',
            '/api/plan/delete',
            '/api/product',
            '/api/product/*',
            '/api/company',
            '/api/company/*',
            '/api/analysis/*',
            '/api/order/*',
            '/api/coupan',
            '/api/coupan/*'
        ],
        AUTH_URLs : [
            '/api/plan/*',
            '/api/product/*',
            '/api/order/*',
            '/api/product/*',
            '/api/company/*',
            '/api/analysis/*',
            '/api/user/password/change',
            '/api/user/password/change/*',
            '/api/coupan',
            '/api/coupan/*'
        ]
   },
   ROLES : {
       ADMIN : 2,
       USER : 1,
       SUPER_ADMIN : 3
   }
}