import mongoose from 'mongoose';
import User from '../models/User.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sampleUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    mobile: '+1234567890',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzAwMDBGRiIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBKRAogIDwvdGV4dD4KPC9zdmc+',
    location: 'New York, USA'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    mobile: '+1234567891',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGMDAwMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBKUwogIDwvdGV4dD4KPC9zdmc+',
    location: 'Los Angeles, USA'
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    mobile: '+1234567892',
    gender: 'Male',
    status: 'InActive',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzAwRkYwMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBNSgogIDwvdGV4dD4KPC9zdmc+',
    location: 'Chicago, USA'
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    mobile: '+1234567893',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGRkYwMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBFRCAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Houston, USA'
  },
  {
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@example.com',
    mobile: '+1234567894',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGMDBGRiIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBEVwogIDwvdGV4dD4KPC9zdmc+',
    location: 'Phoenix, USA'
  },
  {
    firstName: 'Sarah',
    lastName: 'Brown',
    email: 'sarah.brown@example.com',
    mobile: '+1234567895',
    gender: 'Female',
    status: 'InActive',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzAwRkZGRiIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBTQgogIDwvdGV4dD4KPC9zdmc+',
    location: 'Philadelphia, USA'
  },
  {
    firstName: 'Robert',
    lastName: 'Taylor',
    email: 'robert.taylor@example.com',
    mobile: '+1234567896',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzgwMDA4MCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBSVAogIDwvdGV4dD4KPC9zdmc+',
    location: 'San Antonio, USA'
  },
  {
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.anderson@example.com',
    mobile: '+1234567897',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGQTUwMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBMQSAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'San Diego, USA'
  },
  {
    firstName: 'James',
    lastName: 'Thomas',
    email: 'james.thomas@example.com',
    mobile: '+1234567898',
    gender: 'Male',
    status: 'InActive',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzAwODAwMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBKVAogIDwvdGV4dD4KPC9zdmc+',
    location: 'Dallas, USA'
  },
  {
    firstName: 'Jennifer',
    lastName: 'Jackson',
    email: 'jennifer.jackson@example.com',
    mobile: '+1234567899',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGQzBDQiIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBKSiAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'San Jose, USA'
  },
  {
    firstName: 'William',
    lastName: 'White',
    email: 'william.white@example.com',
    mobile: '+1234567800',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzgwODA4MCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBXVwogIDwvdGV4dD4KPC9zdmc+',
    location: 'Austin, USA'
  },
  {
    firstName: 'Ashley',
    lastName: 'Harris',
    email: 'ashley.harris@example.com',
    mobile: '+1234567801',
    gender: 'Female',
    status: 'InActive',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGRDcwMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBBSCAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Jacksonville, USA'
  },
  {
    firstName: 'Christopher',
    lastName: 'Martin',
    email: 'christopher.martin@example.com',
    mobile: '+1234567802',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0RDMTQzQyIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBDTQogIDwvdGV4dD4KPC9zdmc+',
    location: 'Fort Worth, USA'
  },
  {
    firstName: 'Amanda',
    lastName: 'Thompson',
    email: 'amanda.thompson@example.com',
    mobile: '+1234567803',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzQwRTBEMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBBVCAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Columbus, USA'
  },
  {
    firstName: 'Daniel',
    lastName: 'Garcia',
    email: 'daniel.garcia@example.com',
    mobile: '+1234567804',
    gender: 'Male',
    status: 'InActive',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0VFODJFRSIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBERyAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Charlotte, USA'
  },
  {
    firstName: 'Jessica',
    lastName: 'Martinez',
    email: 'jessica.martinez@example.com',
    mobile: '+1234567805',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzkwRUU5MCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBKTSAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Seattle, USA'
  },
  {
    firstName: 'Matthew',
    lastName: 'Robinson',
    email: 'matthew.robinson@example.com',
    mobile: '+1234567806',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0YwRTY4QyIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBNUiAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Denver, USA'
  },
  {
    firstName: 'Michelle',
    lastName: 'Clark',
    email: 'michelle.clark@example.com',
    mobile: '+1234567807',
    gender: 'Female',
    status: 'InActive',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0REQTBERCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBNQyAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Washington, USA'
  },
  {
    firstName: 'Andrew',
    lastName: 'Rodriguez',
    email: 'andrew.rodriguez@example.com',
    mobile: '+1234567808',
    gender: 'Male',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzk4RkI5OCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBBUiAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Boston, USA'
  },
  {
    firstName: 'Stephanie',
    lastName: 'Lewis',
    email: 'stephanie.lewis@example.com',
    mobile: '+1234567809',
    gender: 'Female',
    status: 'Active',
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0Y1REVCMCIvPgogIDx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICBTTCAgPC90ZXh0Pgo8L3N2Zz4=',
    location: 'Nashville, USA'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user-dashboard');
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert sample users
    const insertedUsers = await User.insertMany(sampleUsers);
    console.log(`Successfully inserted ${insertedUsers.length} users`);

    // Display summary
    console.log('\n=== SEED DATA SUMMARY ===');
    console.log(`Total users created: ${insertedUsers.length}`);
    
    const activeUsers = insertedUsers.filter(user => user.status === 'Active').length;
    const inactiveUsers = insertedUsers.filter(user => user.status === 'InActive').length;
    const maleUsers = insertedUsers.filter(user => user.gender === 'Male').length;
    const femaleUsers = insertedUsers.filter(user => user.gender === 'Female').length;

    console.log(`Active users: ${activeUsers}`);
    console.log(`Inactive users: ${inactiveUsers}`);
    console.log(`Male users: ${maleUsers}`);
    console.log(`Female users: ${femaleUsers}`);

    console.log('\n=== SAMPLE USERS ===');
    insertedUsers.slice(0, 5).forEach((user, index) => {
      console.log(`${index + 1}. ${user.firstName} ${user.lastName} (${user.email}) - ${user.status}`);
    });

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
