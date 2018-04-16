var app=angular.module("mysampleApp",[]);
app.controller("mycontroller",['$scope','empService',function($scope,empService)
{
    $scope.ids=1002;
    $scope.doSearch=function()
    {
        empService.getEmpId($scope.ids,function(result)
        {
            $scope.sum=result;
            // $scope.id=result.id;
            // $scope.name=result.name;
            // $scope.address=result.address;
            // $scope.phno=result.phno;
        });
    }

   

}]);

app.service("empService",['$http','$log',function($http,$log)
{
    this.getEmpId=function(ids,cb)
    {
        
        $http({
            url:"http://localhost:1818/api/data/"+ids,
            method:"GET"
        }).then(function(resp)
            {
                cb(resp.data);
                $log.log(resp.data);
         },function(resp)
        {
            $log.error("ERROR occured in js..");
        });
    }
}]);