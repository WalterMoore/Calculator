(function(){

var app = angular.module('myApp',[]);
	
app.controller('CalcController', ['$scope', '$window', function ($scope, $window){
	
	$scope.title="An Angular Calculator";
	$scope.result=null;
	$scope.input1=null;
	$scope.input2=null;
	
		$scope.operation = function(operator){
			if ($scope.input1 == null || $scope.input2 == null){
				alert("Both operands are required");
				return;
			}else if(operator == "+"){
				$scope.result = $scope.input1 + $scope.input2;
				$scope.para = "The result of adding " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
			}else if(operator == "-"){
				$scope.result = $scope.input1 - $scope.input2;
				$scope.para = "The result of subtracting " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
			}else if(operator == "*"){
				$scope.result = $scope.input1 * $scope.input2;
				$scope.para = "The result of multiplying " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
			}else if(operator == "/"){
				if($scope.input2 == 0){
				alert("Are you trying to kill us all? Please don't divide by zero");
				return;
				}else{
				$scope.result = $scope.input1 / $scope.input2;
				$scope.para = "The result of dividing " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
				};
			}
			$scope.input1 = 0;
			$scope.input2 = 0;	
		};
		
}]);
})();