(function(){

var app = angular.module('myApp',[]);
	
app.controller('CalcController', ['$scope', '$window', function ($scope, $window){
	
	$scope.title="The Calculator";
	$scope.result=null;
	$scope.input1=null;
	$scope.input2=null;
	
		$scope.addNum = function(){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else{
			$scope.result = $scope.input1 + $scope.input2;
			};
		}
		
		$scope.subtractNum = function(){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else{
			$scope.result = $scope.input1 - $scope.input2;
			};
		}	
	
		$scope.multiplyNum = function(){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else{
			$scope.result = $scope.input1 * $scope.input2;
			};
		}
		
		$scope.divideNum = function(){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else if ($scope.input2 == 0){
				alert("Are you trying to kill us all? Please don't divide by zero");
				return;
			}else{
			$scope.result = $scope.input1 / $scope.input2;
			};
		}
}]);
})();