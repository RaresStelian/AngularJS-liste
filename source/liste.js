(function(){

angular.module("myApp",[])
	.controller('myCtrl',myCtrl);

	function myCtrl(){
		var vm=this;
		vm.lista=[];
		vm.sortare1=sortare1;
		vm.sortare2=sortare2;
		vm.sortare3=sortare3;
		vm.sortare4=sortare4;
		vm.sortare5=sortare5;
		vm.adaugare=adaugare;
		vm.remove=remove;
		function adaugare(){
			vm.lista.push(vm.valoare);
			vm.valoare="";
		};
		
		function sortare1(){
			vm.lista.sort(function(a,b){return a-b});
		};
		function sortare2(){
			vm.lista.sort(function(a,b){return b-a});
		};
		function sortare3(){
			vm.lista.sort()
		};
		function remove(){
			var index = vm.lista.indexOf(vm.valore);
			vm.lista.splice(index,1);    
		}; 
        function sortare4(){
			vm.lista.sort();
			vm.lista.reverse();
		};
		function sortare5(){
			vm.lista.sort(function(a,b){return 0.5-Math.random()});
			
			
		};
		
	}
})();

