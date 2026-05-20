import { Outlet, NavLink } from "react-router-dom";
import styles from "./Users.module.css";

function Users() {
  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Users Management</h2>

        {/* Tab Navigation between Table and Add Form */}
        <div className={styles.tabs}>
          <NavLink
            to="/users"
            end
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.tabActive : ""}`
            }
          >
            All Users
          </NavLink>
          <NavLink
            to="/users/add"
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.tabActive : ""}`
            }
          >
            + Add User
          </NavLink>
        </div>
      </div>

      {/* ✅ Outlet renders the matched child route:
           /users      → <TableDashboard />
           /users/add  → <FormDashboard />   */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
