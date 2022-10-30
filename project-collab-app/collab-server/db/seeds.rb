puts "🌱 Seeding..."

User.create([
  {
    name: "Jimbo"
  },
  {
    name: "KayDee"
  },
  {
    name: "Jack Skellz"
  },
  {
    name: "WyzeGuy"
  },
  {
    name: "TellEmz"
  }
])

Project.create([
 {
  name: "ProjOne"
  },
  {
    name: "ProjTwo"
  },
  {
    name: "ProjThree"
  },
  {
    name: "ProjFour"
  }
])

Task.create([
  {
    name: "taskONE",
    completedYN: false,
    user_id: 5,
    project_id:4
  },
  {
    name: "taskTWO",
    completedYN: false,
    user_id: 5,
    project_id:4
  },
  {
    name: "taskTHREE",
    completedYN: false,
    user_id: 3,
    project_id:3
  },
  {
    name: "taskFOUR",
    completedYN: false,
    user_id: 2,
    project_id:2
  },
  {
    name: "taskFIVE",
    completedYN: false,
    user_id: 1,
    project_id: 1
  }
])

puts "✅ Done seeding!"
