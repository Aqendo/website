from .. import loader, utils
import traceback

#@loader.unrestricted
@loader.tds
class GetIDMod(loader.Module):
    """Gets am ID of user from username"""
    strings = {"name": "GetID"}
    async def client_ready(self, client, db):
        self.client = client
    @loader.unrestricted
    async def idcmd(self, message):
        """<@username> -> id of user"""
        args = utils.get_args_raw(message)

        if not args:
            await utils.answer(message, "Please provide username.")
            return
        try:
            await utils.answer(message, str((await self.client.get_entity(args)).id))
        except:
            await utils.answer(message, traceback.format_exc())
