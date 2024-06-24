package main

type CategorySummary struct {
    Title    string
    Tasks    int
    AvgValue float64
}

func createTables(db *sql.DB) {
    db.Exec("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, value INTEGER, category TEXT)")
}
function createCategorySummaries (db *sql.DB) []CategorySummary {
	rows, _ := db.Query("SELECT category, COUNT(*), AVG(value) FROM tasks GROUP BY category")
	var summaries []CategorySummary
	for rows.Next() {
		var summary CategorySummary
		rows.Scan(&summary.Title, &summary.Tasks, &summary.AvgValue)
		summaries = append(summaries, summary)
	}
	return summaries
}
func main() {
	db, _ := sql.Open("sqlite3", "tasks.db")
	createTables(db)
	summaries := createCategorySummaries(db)
	for _, summary := range summaries {
		fmt.Printf("%s: %d tasks, avg value %.2f\n", summary.Title, summary.Tasks, summary.AvgValue)
	}
}
