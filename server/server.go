package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
)

type Task struct {
	gorm.Model
	Name            string
	Description     string
	DueDate         time.Time
	DatePrioritized time.Time
	TimeSpent       time.Time
	Completed       bool
	HardDeadline    bool
	ScheduledStart  time.Time
	ScheduledStop   time.Time
	ActualStart     time.Time
	ActualStop      time.Time
	Tags            []Tag `gorm:"many2many:task_tags;"`
	Subtasks        []Subtask
}

type Subtask struct {
	gorm.Model
	TaskID      uint
	TimeStarted time.Time
	TimeEnded   time.Time
}

type Tag struct {
	gorm.Model
	Name string
	//Tasks []*Task `gorm:"many2many:task_tags;"`
}

func main() {
	db, err := gorm.Open("mysql", "root:jchandler0428@/gosql?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Print(err)
		panic("failed to connect to database")
	} else {
		fmt.Println("connected to mysql database")
	}
	defer db.Close()

	db.AutoMigrate(&Task{})
	db.AutoMigrate(&Subtask{})
	db.AutoMigrate(&Tag{})

	//Create
	// db.Create(&Task{Description: "go to store",
	// 	DueDate: time.Now()})
	// db.Create(&Task{Description: "get groceries",
	// 	DueDate: time.Now()})
	// db.Create(&Task{Description: "do something",
	// 	DueDate: time.Now()})

	//Update
	// var task2 Task
	// db.First(&task2, 1)
	// db.Model(&task2).Update("Completed", true)
	// fmt.Println("%+v", task2)

	//Read
	// var tasks []Task
	// db.Find(&tasks)
	// fmt.Println(tasks)

	router := mux.NewRouter()
	fileSrv := http.FileServer(http.Dir("../client/dist"))
	router.PathPrefix("/").Handler(fileSrv)
	log.Fatal(http.ListenAndServe(":8000", router))
}

//go build server.go && ./server.exe
