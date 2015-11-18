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
		$scope.para = "The result of adding " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
		$scope.input1 = 0;
		$scope.input2 = 0;
		}
		
		$scope.subtractNum = function(){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else{
			$scope.result = $scope.input1 - $scope.input2;
			};
		$scope.para = "The result of subtracting " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
		$scope.input1 = 0;
		$scope.input2 = 0;
		}	
	
		$scope.multiplyNum = function(){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else{
			$scope.result = $scope.input1 * $scope.input2;
			};
		$scope.para = "The result of multiplying " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
		$scope.input1 = 0;
		$scope.input2 = 0;
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
		$scope.para = "The result of dividing " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
		$scope.input1 = 0;
		$scope.input2 = 0;
		}
		

}]);
})();