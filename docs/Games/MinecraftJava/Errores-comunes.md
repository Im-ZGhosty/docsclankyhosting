---
title: Errores comunes
---

![](https://105539378-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F09f6qVEsCJT9tRm61hbu%2Fuploads%2F54vM0qhClCnElQ6RR0Xm%2Fdocs_errores.png?alt=media&token=65e9aa3f-bef4-4f2f-9415-0da08b794ffb)

# Errores comunes

En esta documentación te explicamos como solucionar algunos de los errores más comunes en los servidodres de Minecraft Java.

## Unable to access jarfile server.jar

```
Error: Unable to access jarfile server.jar
```

**Descripción:** Este error nos indica que el archivo .jar no se encuentra.

**Soluciones:** Si ya cuentas con un archivo jar en tu servidor, deberás cambiar su nombre a server.jar o de lo contrario copiar el nombre completo de tu archivo y pegarlo en la sección StartUp de tu servidor.

Si tu servidor no tiene ningún archivo jar deberás instalar uno, puedes [instalar un server jar desde la propia consola](https://docs2.clanky.net/games/minecraft/cambio-de-version) o puedes [instalar tu propio server jar](https://docs2.clanky.net/games/minecraft/cambio-de-version).

## Failed to load eula.txt

```
[04:32:51 WARN]: Failed to load eula.txt
[04:32:51 INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
```

**Descripción:** Este error ocurre cuando no has aceptado los términos y condiciones de Minecraft.

**Solución:**

- **1.** Dirígete a /home/container/eula.txt
- **2.** Cambia la opción`eula=false` a `eula=true`.
- **3.** Guarda los cambios y enciende tu servidor.

## Failed to Verify Username

**Descripción:** Por defecto, todos los servidores de Minecraft al instalarse solo funcionan para jugadores que han comprado su juego en Minecraft.net, si no tienes el juego comprado no puedes acceder al servidor. **Solución:** (Cambiar tu servidor de Premium a No Premium) **1\.** Dirígete a /home/container/server.properties **2.** Cambia la opción `online-mode=true` a `online-mode=false`**. 3.** Guarda los cambios y enciende tu servidor.
