export module rest {
    function iTakeItAll(first: string, second: string, ...allOthers: string[]) {
        console.log(allOthers);
    }
    iTakeItAll('foo', 'bar'); // []
    iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']    
}

export module spread {
    var list = [1, 2];
    list = [...list, 3, 4];
	console.log(list);
}