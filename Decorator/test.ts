class Database {
    private $record;
    private $name;

    public function Database($name) {
        $this -> name = $name;
        $this -> record = 0;
    }

    public function getName() {
        return $this -> name;
    }

    public function editRecord($operation) {
        return "Performing a ".$operation.
            " operation on record ".$this -> record.
            " in database ".$this -> name;
    }
}