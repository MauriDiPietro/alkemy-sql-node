import { UserModel } from "./user-model.js";
import { RoleModel } from "./role-model.js";
import { PermissionModel } from "./permissions-model.js";

UserModel.belongsTo(RoleModel, {
  foreignKey: "role_id",
  as: "role",
});

RoleModel.hasMany(UserModel, {
  foreignKey: "role_id",
  as: "usuarios",
});

RoleModel.belongsToMany(PermissionModel, {
  through: { model: "role_permissions", timestamps: false },
  foreignKey: "role_id",
  otherKey: "permission_id",
  as: "permisos",
});

PermissionModel.belongsToMany(RoleModel, {
  through: { model: "role_permissions", timestamps: false },
  foreignKey: "permission_id",
  otherKey: "role_id",
  as: "roles",
});

export default {
  UserModel,
  RoleModel,
  PermissionModel,
};


/*
CREATE TABLE test.role_permissions (
  role_id INT,
  permission_id INT,
  PRIMARY KEY (role_id, permission_id),
  FOREIGN KEY (role_id) REFERENCES test.roles(id),
  FOREIGN KEY (permission_id) REFERENCES test.permissions(id)
);

--admin

INSERT INTO test.role_permissions (role_id, permission_id)
VALUES
(1, 1), -- crear
(1, 2), -- leer
(1, 3), -- actualizar
(1, 4); -- eliminar

--usuario

INSERT INTO test.role_permissions (role_id, permission_id)
VALUES
(2, 1), -- crear
(2, 2), -- leer
(2, 3); -- actualizar

--invitado

INSERT INTO test.role_permissions (role_id, permission_id)
VALUES
(3, 2); -- leer

--

SELECT 
  r.id AS role_id,
  r.name AS role_nombre,
  p.id AS permiso_id,
  p.name AS permiso_nombre
FROM test.role_permissions rp
JOIN test.roles r ON rp.role_id = r.id
JOIN test.permissions p ON rp.permission_id = p.id
ORDER BY r.id, p.id;
*/