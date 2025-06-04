# [DRAFT] PostgreSQL Migration

## Changes Made
- Migrated from SQLite to PostgreSQL
- Updated database configuration
- Added PostgreSQL-specific schema definitions
- Updated dependencies in package.json

## Technical Details
- Added `pg` package for PostgreSQL support
- Removed `sqlite3` dependency
- Updated database connection configuration
- Added proper table schema with PostgreSQL data types

## Testing Instructions
1. Install PostgreSQL if not already installed
2. Create database:
   ```sql
   CREATE DATABASE coding_exercises;
   ```
3. Update connection details in `knex-database/database.js` if needed
4. Run the database example:
   ```bash
   npm install
   node knex-database/database.js
   ```

## Checklist
- [ ] Database connection works
- [ ] Table creation successful
- [ ] Queries execute correctly
- [ ] Documentation updated
- [ ] Tests added (if applicable)

## Related Issues
Closes #1

## Notes
This is a draft PR for review. Please provide feedback on the implementation. 