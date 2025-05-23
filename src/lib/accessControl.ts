class AccessControl {
  static menuHasRole: (menu: any) => boolean = (menu: any) => {
    const authorities = localStorage.getItem('authorities')
    const authentications = authorities ? JSON.parse(authorities as string) : []

    if (menu.path === '/') {
      return true
    }

    if (menu.roles) {
      const roles = menu.roles
      for (let i = 0; i < roles.length; i++) {
        if (authentications.includes(roles[i])) {
          return true
        }
      }
      return false
    }
    return true
  }

  static hasRole: (roles: string[]) => boolean = (roles: string[]) => {
    const authorities = localStorage.getItem('authorities')
    const authentications = authorities ? JSON.parse(authorities as string) : []

    for (let i = 0; i < roles.length; i++) {
      if (authentications.includes(roles[i])) {
        return true
      }
    }
    return false
  }
}

export default AccessControl
