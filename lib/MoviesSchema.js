schema = {
	"movies": {
		"_id": {
			"primaryKey": true,
			"type": "Object",
			
		},
		"plot": {
			"type": "string",
			
		},
		"genres": {
			"type": "Array",
			
		},
		"runtime": {
			"type": "number",
			
		},
		"cast": {
			"type": "Array",
			
		},
		"num_mflix_comments": {
			"type": "number",
			
		},
		"title": {
			"key": true,
			"type": "string",
			
		},
		"fullplot": {
			"type": "string",
			
		},
		"countries": {
			"type": "Array",
			
		},
		"released": {
			"type": "Date",
			
		},
		"directors": {
			"type": "Array",
			
		},
		"rated": {
			"type": "string",
			
		},
		"awards": {
			"type": "Object",
			"structure": {
				"wins": {
					"type": "number",
					
				},
				"nominations": {
					"type": "number",
					
				},
				"text": {
					"type": "string",
					
				}
			},
			
		},
		"poster": {
			"type": "string",
			
		},
		"languages": {
			"type": "Array",
			
		},
		"writers": {
			"type": "Array",
			
		},
		"lastupdated": {
			"type": "string",
			
		},
		"imdb": {
			"type": "Object",
			"structure": {
				"rating": {
					"type": "number",
					
				},
				"votes": {
					"type": "number",
					
				},
				"id": {
					"type": "number",
					
				}
			},
			
		},
		"year": {
			"type": "number",
			
		},
		"metacritic": {
			"type": "number",
			
		},
		"type": {
			"type": "string",
			
		},
		"tomatoes": {
			"type": "Object",
			"structure": {
				"website": {
					"type": "string",
					
				},
				"viewer": {
					"type": "Object",
					"structure": {
						"rating": {
							"type": "number",
							
						},
						"numReviews": {
							"type": "number",
							
						},
						"meter": {
							"type": "number",
							
						}
					},
					
				},
				"dvd": {
					"type": "Date",
					
				},
				"critic": {
					"type": "Object",
					"structure": {
						"rating": {
							"type": "number",
							
						},
						"numReviews": {
							"type": "number",
							
						},
						"meter": {
							"type": "number",
							
						}
					},
					
				},
				"lastUpdated": {
					"type": "Date",
					
				},
				"fresh": {
					"type": "number",
					
				},
				"production": {
					"key": true,
					"type": "string",
					
				},
				"boxOffice": {
					"type": "string",
					
				},
				"consensus": {
					"type": "string",
					
				},
				"rotten": {
					"type": "number",
					
				}
			},
			
		}
	}
}