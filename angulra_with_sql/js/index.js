var app=angular.module("mysampleApp",[]);
app.controller("mycontroller",['$scope','empService',function($scope,empService)
{
    $scope.id=0;
    $scope.doSearch=function()
    {
        empService.getEmpId($scope.id,function(result)
        {
            $scope.id=result.id;
            $scope.name=result.name;
            $scope.address=result.address;
            $scope.phno=result.phno;
        });
    }

   

}]);

app.service("empService",['$http','$log',function($http,$log)
{
    this.getEmpId=function(id,cb)
    {
        
        $http({
            url:"http://localhost:1818/api/data/"+id,
            method:"GET"
        }).then(function(resp)
            {
                cb(resp.data);
         },function(resp)
        {
            $log.log("ERROR occured..");
        });
    }
}]);