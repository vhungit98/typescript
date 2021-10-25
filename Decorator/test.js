var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Database = function ($name) {
        $this -  > name;
        $name;
        $this -  > record;
        0;
    };
    Database.prototype.getName = function () {
        return $this -  > name;
    };
    Database.prototype.editRecord = function ($operation) {
        return "Performing a ".$operation.
        ;
        " operation on record ".$this -  > record.
        ;
        " in database ".$this -  > name;
    };
    return Database;
}());
